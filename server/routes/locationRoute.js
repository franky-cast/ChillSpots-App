import { Router } from "express"
const router = Router();

// import controller
import locationController from "../controllers/locationController.js";

// import model
import Location from "../models/location.js";

// import middlewares
import locationMiddleware from "../middleware/locationMiddleware.js"
const { uploadImages, getAddress, getLatLng } = locationMiddleware


// API ROUTES

router.route('/add').post(uploadImages, getAddress, (req, res) => {
    locationController.addLocation(req)
        .then(() => res.json('Location added!'))
        .catch(err => res.json({ error: `Internal server error --> '/locations/add' : ${err}` }))
})


router.route('/addByAddress').post(uploadImages, getLatLng, (req, res) => {
    locationController.addLocation(req)
        .then(() => res.json('Location added!'))
        .catch(err => res.json({ error: `Internal server error --> '/locations/addByAddress' : ${err}` }))
})


router.route('/').get((req, res) => {
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.json({ error: `Internal server error --> '/locations/' : ${err}` }))
})


router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.json({ error: `Internal server error --> '/locations/:id' : ${err} \n incorrect id or incorrect route path` }))
})


router.route('/:id/update').put((req, res) => {    
    locationController.updateLocation(req)    
      .then(() => res.json('Location updated successfully!'))
      .catch(err => res.json({ error: `Internal server error --> '/locations/:id/update' : ${err}` }))
});


router.route('/:id/delete').delete((req, res) => {
    locationController.deleteLocation(req.params.id)    
      .then(() => res.json('Location deleted successfully!'))
      .catch(err => res.json({ error: `Internal server error --> '/locations/:id/delete' : ${err}` }))
});

export default router