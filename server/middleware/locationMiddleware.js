
// finds lat and long based on address
async function geoCode (req, res, next) {
    const { address } = req.body
    const encodedAddress = encodeURI(address)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_API_KEY}`

    try {        
        const data = await fetch(url)
        const jsonData = await data.json()
        const { results, status } = jsonData

        switch (status) {
            case "OK":
                const { lat, lng } = results[0].geometry.location
                req.body.lat = lat
                req.body.lng = lng
                next()
                break

            case "ZERO_RESULTS":
                return res.status(400).json({ error: `Status of request: 'ZERO_RESULTS' ... Check documentation @ https://developers.google.com/maps/documentation/geocoding/requests-geocoding`} )
                break

            case "OVER_DAILY_LIMIT":
                return res.status(400).json({ error: `Status of request: 'OVER_DAILY_LIMIT' ... Check documentation @ https://developers.google.com/maps/documentation/geocoding/requests-geocoding`} )
                break

            case "OVER_QUERY_LIMIT":
                return res.status(400).json({ error: `Status of request: 'OVER_QUERY_LIMIT' ... Check documentation @ https://developers.google.com/maps/documentation/geocoding/requests-geocoding`} )
                break

            case "REQUEST_DENIED":
                return res.status(400).json({ error: `Status of request: 'REQUEST_DENIED' ... Check documentation @ https://developers.google.com/maps/documentation/geocoding/requests-geocoding`} )
                break

            case "INVALID_REQUEST":
                return res.status(400).json({ error: `Status of request: 'INVALID_REQUEST' ... Check documentation @ https://developers.google.com/maps/documentation/geocoding/requests-geocoding`} )
                break
        }

    } catch (err) {
        return res.status(500).json({ error: `Internal server error --> geoCode(req) locationMiddleware.js: ${err}` })
    }
}

export default {
    geoCode
}