import axios from 'axios'

const signIn = async (usernameEntered, passwordEntered) => {
	const res = await axios.post(`${import.meta.env.VITE_APP_URL}/users/signin`, {
		username: usernameEntered,
		password: passwordEntered
	})
	.then((res) => res)
	.catch((err) => console.error(`Internal server error: $(err)`))
	return res.data
}

export default signIn