// imports for img upload to google cloud --> used by uploadImages(req, res, next)

import path from 'path'
import { fileURLToPath } from "url"

import { Storage } from "@google-cloud/storage" 

const serviceKeyPath = fileURLToPath(import.meta.url)
const serviceKey = path.join(path.dirname(serviceKeyPath), '..', 'googleCloudStorage/mykey.json')
const storage = new Storage({
	keyFilename: serviceKey,
  	projectId: "chillspots"
})

const bucket = storage.bucket("chillspots-app")


// uploads images to google cloud storage
async function uploadImages (req, res, next) {
    console.log("\n made it to uploadImages() in location middleware")

    try {
        const files = req.body.files
        let imgs = []
        console.log("\n File(s) found, trying to upload...")

        for (let file of files) {
            const {name, buffer} = file
            console.log('\n')
            console.log(`buffer: ${buffer}`)
            console.log(`name: ${name}`)


            // uses req.body.imgs[i].name to create reference to file stored in bucket
            const blob = bucket.file(name.replace(/ /g, "_"))

            // creates a writeable stream that will be used to upload file data to the specified blob(file) in bucket
            const blobStream = blob.createWriteStream()

            // event handler that is triggered when file finishes uploading
            // appends public URL to imgs arr

            blobStream.on("finish", () => {
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                imgs.push(publicUrl)

                // Check if all images are uploaded before sending the response
                if (imgs.length === files.length) {
                    console.log(`\n ${name} uploaded successfully`)
                    // attaching the array of img urls to the req body
                    req.body.imgs = imgs
                    next()
                }
            }).end(buffer)
        }
    } catch (err) {
        return res.status(500).json({ error: `Unable to upload image... something went wrong \n Internal server error --> uploadImages(req, res, next) locationMiddleware.js: ${err}` })
    }
}


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
    uploadImages,
    getAddress,
    getLatLng
}