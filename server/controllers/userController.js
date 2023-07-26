import { error } from 'console';
import User from '../models/user.js';
import crypto from "crypto"

// handler functions
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

    // creating sessionID for currently logged in user
    const randomToken = crypto.randomBytes(Math.ceil(32 / 2)).toString('hex').slice(0, 32)
    const sessionId = {
        name: username,
        token: randomToken
    }

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
    updateUser,
    deleteUser,
    registerUser
}