import { Router } from "express"
const router = Router();

// import controller
import userController from "../controllers/userController.js";

// import model
import User from "../models/user.js";

// import middlewares
import userMiddleware from "../middleware/userMiddleware.js";
const { validateSignIn, validateRegistration, checkProfilePicture, validateSignOut } = userMiddleware


// API ROUTES
// sign in user
router.route('/signin').post(validateSignIn, (req, res) => {
    try{
        const session = userController.signIn(req)
        const sessionToken = session.token
        res.cookie('sessionId', session.token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({
            message: 'Succesful sign in',
            name: session.username
        }) 
    } catch (err) {
        res.json({ error: `Internal server error --> '/users/signin' : ${err}` })
    }
           
})


// sign out user
router.route('/signout').get((req, res) => {
    const sessionIdCookie = req.cookies.sessionId
    
    // -------------------------------------------------------------------------------------------------
    // keeps throwing error: "req.cookies['sessionId'] does not exist... \n User is not signed in."
    // see Hero.jsx

    // everything works when i test the routes with insomnia
    // -------------------------------------------------------------------------------------------------

    if (!sessionIdCookie || typeof sessionIdCookie !== 'string') {        
        return (res.json({ error: "req.cookies['sessionId'] does not exist... \n User is not signed in." }))
    }

    try {
      res.clearCookie('sessionId')
      res.json({ message: 'Successful sign out' })
    } catch (err) {
      res.json({ error: `Internal server error --> '/users/signout' : ${err}` })
    }
})


// register users
router.route('/add').post(validateRegistration, checkProfilePicture, (req, res) => {
    userController.registerUser(req)
      .then(() => res.json({ message: 'User added!' }))
      .catch(err => res.json({ error: `Internal server error --> '/users/add' : ${err}` }))
})


// get users* -  for testing purposes
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json({ error: `Internal servor error --> '/users/' : ${err}` }))
})


// get user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json({ error: `Internal server error --> '/users/:id' : ${err} \n incorrect id or incorrect route path` }))
})


// updating user info
router.route('/update/:id').put((req, res) => {    
    userController.updateUser(req)    
      .then(() => res.json({ message: 'User updated successfully!' }))
      .catch(err => res.json({ error: `Internal server error --> '/users/update/:id' : ${err}` }));
});


// delete user info
router.route('/delete/:id').delete((req, res) => {    
    userController.deleteUser(req.params.id)    
      .then(() => res.json({ message: 'User deleted successfully!' }))
      .catch(err => res.json({ error: `Internal server error --> '/users/delete/:id' : ${err}` }));
});

export default router