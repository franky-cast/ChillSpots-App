import axios from 'axios'


async function signIn (usernameEntered, passwordEntered) {
	try {
		const res = await axios.post(`${import.meta.env.VITE_APP_URL}/users/signin`, {
		username: usernameEntered,
		password: passwordEntered
		})
		return res
	} catch (err) {
		console.error(`Internal server error: ${err}`)
	}
}

export default signIn