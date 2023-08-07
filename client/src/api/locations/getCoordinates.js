import axios from "axios"

async function fetchLocation (id) {
	try {
		const res = await axios.get(`${import.meta.env.VITE_APP_URL}/locations/${id}`)
		return res.data
	} catch (err) {
		return res.json(`Internal server error: ${err}`)
	}
}

export default fetchLocation