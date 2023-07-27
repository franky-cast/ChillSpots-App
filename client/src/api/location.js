const fetchLocations = async () => {
	try {
		const res = await fetch(`${import.meta.env.VITE_APP_URL}/locations/`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
            }
		})
		return await res.json()
	} catch (err) {
		res.json(`Internal server error: ${err}`)
	}
}

export default fetchLocations