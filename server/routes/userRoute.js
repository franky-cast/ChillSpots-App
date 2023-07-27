import { Router } from "express"
const router = Router();

// import controller
import userController from "../controllers/userController.js";

// import model
import User from "../models/user.js";

// import middlewares
import userMiddleware from "../middleware/userMiddleware.js";
const { validateSignIn, validateRegistration, checkProfilePicture } = userMiddleware


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