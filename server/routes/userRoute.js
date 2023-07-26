import { Router } from "express"
const router = Router();

// import controller
import userController from "../controllers/userController.js";

// import model
import User from "../models/user.js";

// import middlewares
const validateSignIn = async (req, res, next) => {
    // checks if user is already registered
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user && user.password === req.body.password) {
            // binds the userId to the req body so that it make be used in corresponding eventHandler
            req.userId = user.id
            req.name = user.name
            
            // checks if user is already signed in
            if (req.cookies.sessionId) {
                return res.status(409).json( {error: 'User is already signed in'})
            }
            next()
        } else {
            return res.status(404).json( {error: 'Incorrect username or password'} )
        }
    } catch (err) {
        return res.status(400).json(`Internal server error: ${err}`)
    }
}


// makes sure user does not already exist upon user registration
const validateRegistration = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username })
      if (!user){
        next()
      } else {
        return res.status(409).json( {error: 'Username already exists'} )
      }
    } catch (err) {
        return res.status(500).json(`Internal server error: ${err}`)
    }
}


// check if profile picture added
const checkProfilePicture = (req, res, next) => {
    if (!req.body.profilePicture) {
        req.body.profilePicture = "default_profile_picture.jpg"
    }
    next()
}


// API ROUTES
// sign in user
router.route('/signin').get(validateSignIn, (req, res) => {
    const sessionId = userController.signIn(req)
    res.cookie('sessionId', sessionId.token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.json({
        message: 'Succesful sign in',
        name: sessionId.name
    })
})


// register users
router.route('/add').post(validateRegistration, checkProfilePicture, (req, res) => {
    userController.registerUser(req)
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json(`Error: ${err}`))
})


// get users* -  for testing purposes
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// get user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// updating user info
router.route('/update/:id').put((req, res) => {    
    userController.updateUser(req)    
      .then(() => res.json('User updated successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});


// delete user info
router.route('/delete/:id').delete((req, res) => {    
    userController.deleteUser(req.params.id)    
      .then(() => res.json('User deleted successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});

export default router