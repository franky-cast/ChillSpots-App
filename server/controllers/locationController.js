import Location from "../models/location.js";

// handler functions
const addLocation = (req) => {
    const { name, pictures, address, city, state, lat, lng, approved, stats, place_id, timestamp} = req.body

    const newLocation = new Location ({
        name,
        pictures,
        address,
        city,
        state,
        lat,
        lng,
        stats,
        approved,
        place_id,
        timestamp
    })
    
    return newLocation.save()
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