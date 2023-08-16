import mongoose from "mongoose"
// const locationTags = [
//     'Easily Accessible',
//     'Difficult to Access',
//     'Free',
//     'Expensive',
//     'Crowded',
//     'Uncrowded',
//     'Loud',
//     'Quiet',
//     'Parking',
//     'No parking',
//     'Night spot',
//     'Day spot',
//     'Good view'
// ]

const locationSchema = new mongoose.Schema({
    // user input
    name: { type: String, required: true },
    pictures: [ { type: String, required: true } ],
    locationData: {
        address: { type: String, required: true},
        latlng: { type: Number, require: true },
    },
    description: { type: String, require: true },
    rating: { type: Number, require: true },

    // automatic
    approved: { type: Boolean, default: false },
    place_id: { type: String, required: true },
    plus_code: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }


    // tags: [{ type: String, enum: locationTags, require: true }],
    // stats: {
        // rating: { type: Number },
        // reviewCount: { type: Number },
        // reviews: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Review' } ],
    // },
})

const Location = mongoose.model('Location', locationSchema)

export default Location