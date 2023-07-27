import mongoose from "mongoose";
import Comment from "../models/comment.js"

const reviewSchema = new mongoose.Schema({
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  textContent: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  timestamp: { type: Date, default: Date.now }
  // comments: [Comment.schema]
});

const Review = mongoose.model('Review', reviewSchema)

export default Review