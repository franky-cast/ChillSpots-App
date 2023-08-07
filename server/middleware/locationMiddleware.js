// import latitude / longtitude api here
const url = "123"
// fetch to the api with the address entered by the user

async function getCoordinates (req) {
    const { address } = req
    const data = await fetch (url, address)
    const { lat, long } = data

    // attaching the lat and long to req body???
    // req.body.lat = lat
    // req.body.lat = long
}

export default {
    getCoordinates
}