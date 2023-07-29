import axios from 'axios'

const getTest = () => {
	axios.get(`${import.meta.env.VITE_APP_URL}/test`)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
}

export default getTest