// import router
import express from "express";
const router = express.Router();

// import controller
import userController from "../controllers/userController.js";
import User from "../models/user.js";

// import middlewares
// check if profile picture added
const checkProfilePicture = (req, res, next) => {
    if (!req.body.profilePicture) {
        req.body.profilePicture = "default_profile_picture.jpg"
    }
    next()
}



// API ROUTES

// register users
router.route('/add').post(checkProfilePicture, (req, res) => {
    userController.registerUser(req)
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err} this is the erorr`))
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
router.route('/:id/update').put((req, res) => {    
    userController.updateUser(req)    
      .then(() => res.json('User updated successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});


// delete user info
router.route('/:id/delete').delete((req, res) => {    
    userController.deleteUser(req.params.id)    
      .then(() => res.json('User deleted successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});

export default router