import { Router } from "express"
const router = Router();

// import controller
import locationController from "../controllers/locationController.js";

// import model
import Location from "../models/location.js";

// import middlewares



// API ROUTES

router.route('/add').post((req, res) => {
    locationController.addLocation(req)
        .then(() => res.json('Location added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// get users* -  for testing purposes
router.route('/').get((req, res) => {
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// get user by id
router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// updating user info
router.route('/:id/update').put((req, res) => {    
    locationController.updateLocation(req)    
      .then(() => res.json('Location updated successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});


// delete user info
router.route('/:id/delete').delete((req, res) => {    
    locationController.deleteLocation(req.params.id)    
      .then(() => res.json('Location deleted successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
});

export default router