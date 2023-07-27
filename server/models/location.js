import mongoose from "mongoose"

const locationSchema = new mongoose.Schema({
    pictures: [
        { type: String, required: true }
    ],
    name: { type: String, required: true },
    length: { type: Number, required: true },
    difficulty: { type: String, required: true, enum: ['Easy', 'Moderate', 'Difficult'] },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    approved: { type: Boolean, default: false },
    address: { type: String, required: true}
})

const Location = mongoose.model('Location', locationSchema)

export default Location