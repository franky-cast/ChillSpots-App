import axios from "axios"

async function addLocation (locationData) {
    try {
	    const res = await axios.post(`${import.meta.env.VITE_APP_URL}/locations/add`, {
            locationData: locationData
        })
	    return res
	} catch (err) {
	    return res.json(`Internal server error: ${err}`)
    }
}

export default addLocation