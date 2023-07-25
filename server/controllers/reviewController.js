import Review from "../models/review.js"

// handler functions
const addReview = (req) => {
    const { locationId, userId, rating, textContent, likes, timestamp } = req.body

    const newReview = new Review ({
        locationId,
        userId,
        rating,
        textContent,
        likes,
        timestamp
    })

    return newReview.save()
}

const updateReview = (req) => {
    const reviewId = req.params.id; // Get the user ID from the URL parameter
    const updatedReviewData = req.body; // Get the updated user data from the request body
    return Review.findByIdAndUpdate(reviewId, updatedReviewData, { new: true })
};

const deleteReview = (reviewId) => {
    return Review.findByIdAndDelete(reviewId)
};


export default {
    addReview,
    updateReview,
    deleteReview
}