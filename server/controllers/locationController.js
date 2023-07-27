import Location from "../models/location.js";

// handler functions
const addLocation = (req) => {
    const { name, pictures, stats, address, city, state, latitude, longitude, approved, timestamp} = req.body

    const newLocation = new Location ({
        name,
        pictures,
        stats,
        address,
        city,
        state,
        latitude,
        longitude,
        approved,
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