import User from '../models/user.js';
import crypto from 'crypto'

// handler functions
const signIn = (req) => {
    // creating sessionID for currently logged in user
    const randomToken = crypto.randomBytes(Math.ceil(32 / 2)).toString('hex').slice(0, 32)
    const sessionId = {
        userId: req.userId,
        username: req.body.username,
        name: req.name,
        token: randomToken
    }
    return sessionId
}


const registerUser = (req) => {
    const { username, email, password, name, profilePicture, createdAt } = req.body

    const newUser = new User ({
        username,
        email,
        password,
        name,
        profilePicture,
        createdAt
    })

    return newUser.save()
};


const updateUser = (req) => {
    const userId = req.params.id; // Get the user ID from the URL parameter
    const updatedUserData = req.body; // Get the updated user data from the request body
    return User.findByIdAndUpdate(userId, updatedUserData, { new: true })
};


const deleteUser = (userId) => {
    return User.findByIdAndDelete(userId)
};



export default {
    signIn,
    updateUser,
    deleteUser,
    registerUser
}