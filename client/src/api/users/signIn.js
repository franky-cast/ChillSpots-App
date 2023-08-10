import axios from 'axios'

async function signIn (emailEntered, passwordEntered) {
	try {
		const res = await axios.post(`${import.meta.env.VITE_APP_URL}/users/signin`, {
		email: emailEntered,
		password: passwordEntered
		})
		return res
	} catch (err) {
		console.error(`Internal server error: ${err}`)
	}
}

export default signIn