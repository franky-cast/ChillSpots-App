import mongoose from "mongoose"
const locationTags = [
    'Easily Accessible',
    'Difficult to Access',
    'Free',
    'Expensive',
    'Crowded',
    'Uncrowded',
    'Loud',
    'Quiet',
    'Parking',
    'No parking',
    'Night spot',
    'Day spot',
    'Good view'
]

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pictures: [
        { type: String, required: true }
    ],
    stats: {
        rating: { type: Number },
        likes: { type: Number },
        reviews: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Review' } ],
        tags: [{ type: String, enum: locationTags }]
    },

    address: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    approved: { type: Boolean, default: false },

    timestamp: { type: Date, default: Date.now }
})

const Location = mongoose.model('Location', locationSchema)

export default Location