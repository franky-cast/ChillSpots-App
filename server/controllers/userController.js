import User from '../models/user.js';
import cryptoRandomString from 'crypto-random-string'

// handler functions
const signIn = (req) => {
    // creating sessionID for currently logged in user
    const randomToken = cryptoRandomString({ length: 64})
    const session = {
        userId: req.userId,
        email: req.body.email,
        name: req.name,
        token: randomToken
    }
    return session
}


const registerUser = (req) => {
    const { username, email, password, name, profilePicture, timestamp } = req.body

    const newUser = new User ({
        username,
        email,
        password,
        name,
        profilePicture,
        timestamp
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