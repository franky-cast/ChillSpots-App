import User from "../models/user.js"

// validates sign in of user
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
                return res.status(409).json( {error: 'No duplicate sign ins. User is already signed in'})
            }
            next()
        } else {
            return res.status(404).json( {error: 'Incorrect username or password'} )
        }
    } catch (err) {
        return res.status(400).json({ error: `Internal server error --> validateSignIn() userMiddleware.js: ${err}` })
    }
}


// makes sure user does not already exist upon user registration
const validateRegistration = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username })
      if (!user){
        next()
      } else {
        return res.status(409).json({ error: 'Username already exists'} )
      }
    } catch (err) {
        return res.status(500).json({ error: `Internal server error --> validateRregistration() userMiddelware.js: ${err}` })
    }
}


// check if profile picture added
const checkProfilePicture = (req, next) => {
    if (!req.body.profilePicture) {
        req.body.profilePicture = "default_profile_picture.jpg"
    }
    next()
}

export default {
    validateSignIn,
    validateRegistration,
    checkProfilePicture
}