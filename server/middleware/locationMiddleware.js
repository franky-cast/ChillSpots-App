
// finds adddress based on lat and long
async function getAddress (req, res, next) {
    const { lat, lng } = req.body.coords
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_API_KEY}`

    try {
        const data = await fetch (url)
        const jsonData = await data.json()
        const { results, status } = jsonData

        switch (status) {
            case "OK":
                const { formatted_address, place_id, plus_code } = results[0]
                req.body.address = formatted_address
                req.body.place_id = place_id
                
                req.body.plus_code = plus_code.global_code

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
            
            default:
                return res.status(500).json({ error: `Status of request: 'UKNOWN_ERROR' ... Request could not be processed due to Google Maps Geocoding API server error.. Try Again`} )
        }

    } catch (err) {
        return res.status(500).json({ error: `Internal server error --> getAddress(req, res, next) locationMiddleware.js: ${err}` })
    }
}

// finds lat and long based on address
async function getLatLng (req, res, next) {
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

                const { formatted_address, place_id, plus_code } = results[0]
                req.body.address = formatted_address
                req.body.place_id = place_id
                req.body.plus_code = plus_code["global_code"]
                
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
            
            default:
                return res.status(500).json({ error: `Status of request: 'UKNOWN_ERROR' ... Request could not be processed due to Google Maps Geocoding API server error.. Try Again`} )
        }

    } catch (err) {
        return res.status(500).json({ error: `Internal server error --> getLatLng(req, res, next) locationMiddleware.js: ${err}` })
    }
}

export default {
    getAddress,
    getLatLng
}