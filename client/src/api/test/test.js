const getTest = async () => {
	try {
		const res = await fetch(`${import.meta.env.VITE_APP_URL}/test`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
		return await res.json();
	} catch (err) {}
};

export default getTest