import axios from 'axios'

const fetchLocations = async () => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_APP_URL}/locations/`)
		return res.data
	} catch (err) {
		return res.json(`Internal server error: ${err}`)
	}
}

export default fetchLocations