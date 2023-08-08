async function geoCode (req, res, next) {
    try {
        const { address } = req.body
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`

        const data = await fetch(url)
        const jsonData = await data.json()
        const { results, status } = jsonData

        if (status === 'OK') {
            const { lat, lng } = results[0].geometry.location
            req.body.lat = lat
            req.body.lng = lng
            next()
        } else {
            return res.status(400).json({ error: `Status of geocoding request not 'OK'.. Status of request: ${status}`} )
        }

    } catch (err) {
        return res.status(500).json({ error: `Internal server error --> geoCode(req) locationMiddleware.js: ${err}` })
    }
}

export default {
    geoCode
}