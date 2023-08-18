import axios from 'axios'

async function addLocation (locationData) {
    console.log(locationData)
    try {
        if (locationData.address === null) {
            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/locations/add`, {
                locationData: locationData
            })
            return res.data

        } else {
            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/locations/addByAddress`, {
                locationData: locationData
            })
            return res.data
        }
    } catch (err) {
        return ({ error: `Internal server error --> '/client/src/api/addLocation.js': ${err}` })
    }
}

export default addLocation