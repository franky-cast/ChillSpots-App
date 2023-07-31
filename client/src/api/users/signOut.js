import axios from 'axios'

const signOut = async () => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_APP_URL}/users/signout`)
		return res
	} catch (err) {		
		return err
	}	
}

export default signOut