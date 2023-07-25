import User from '../models/user.js';


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