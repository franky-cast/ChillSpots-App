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
    address: { type: String, required: true},
    lat: { type: Number, require: true},
    lng: { type: Number, require: true },
    approved: { type: Boolean, default: false },
    stats: {
        rating: { type: Number },
        reviewCount: { type: Number },
        reviews: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Review' } ],
        tags: [{ type: String, enum: locationTags }]
    },
    place_id: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
})

const Location = mongoose.model('Location', locationSchema)

export default Location