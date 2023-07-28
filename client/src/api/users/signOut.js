const signOut = async () => {
	try {
		const res = await fetch(`${import.meta.env.VITE_APP_URL}/users/signout`, {
			method: "GET",
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