import Location from "../models/location.js";

// handler functions
const addLocation = (req) => {
    try {
        const { name, address, coords, description, rating, imgs, approved, place_id, plus_code, timestamp} = req.body
        const { lat, lng } = coords

        const newLocation = new Location ({
            name,
            locationData: {
                address,
                lat,
                lng
            },
            description,
            rating,
            imgs,
            approved,
            place_id,
            plus_code,
            timestamp
        })
    
        return newLocation.save()
    } catch (e) {
        return ({error: `error saving location to MongoDB: ${e}`})
    }
    
}

const updateLocation = (req) => {
    const locationId = req.params.id; // Get the user ID from the URL parameter
    const updatedLocationData = req.body; // Get the updated user data from the request body
    return Location.findByIdAndUpdate(locationId, updatedLocationData, { new: true })
};

const deleteLocation = (locationId) => {
    return Location.findByIdAndDelete(locationId)
};


export default {
    addLocation,
    updateLocation,
    deleteLocation
}