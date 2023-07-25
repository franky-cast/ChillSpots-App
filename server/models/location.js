import mongoose from "mongoose"

const locationSchema = new mongoose.Schema({
    pictures: [{
        url: { type: String, required: true }
    }],
    name: { type: String, required: true },
    length: { tpye: Number, required: true },
    difficulty: { type: String, required: true, enum: ['Easy', 'Moderate', 'Difficult'] },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    approved: { type: Boolean, default: false } // Added approval status field
})

const Location = mongoose.model('Location', locationSchema)

export default Location