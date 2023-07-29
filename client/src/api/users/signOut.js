import axios from 'axios'

const signOut = () => {
	axios.get(`${import.meta.env.VITE_APP_URL}/users/signout`)
	.then((res) => res.json())
	.catch((err) => console.log(err))
}

export default signOut