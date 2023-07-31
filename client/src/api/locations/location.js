import axios from 'axios'

const fetchLocations = async () => {
	const res = await axios.get(`${import.meta.env.VITE_APP_URL}/locations/`)
		.then((res) => res)
		.catch((err) => res.json(`Internal server error: ${err}`))
	return res.data
}

export default fetchLocations