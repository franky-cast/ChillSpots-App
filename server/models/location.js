import mongoose from "mongoose"

const locationSchema = new mongoose.Schema({
    // user input
    name: { type: String, required: true },
    files: [ { type: String, required: true } ],
    locationData: {
        address: { type: String, required: true},
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    description: { type: String, require: true },
    rating: { type: Number, require: true },

    // automatic
    imgs: [ { type: String, required: true } ] ,
    approved: { type: Boolean, default: false },
    place_id: { type: String, required: true },
    plus_code: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
})

const Location = mongoose.model('Location', locationSchema)

export default Location