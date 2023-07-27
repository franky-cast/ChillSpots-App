const signIn = async (usernameEntered, passwordEntered) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_APP_URL}/users/signin`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: usernameEntered,
				password: passwordEntered
			})
		})
		return await res.json()
	} catch (err) {
		res.json(`Internal server error: ${err}`)
	}
}

export default signIn