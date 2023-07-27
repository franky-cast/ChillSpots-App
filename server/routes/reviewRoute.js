import { Router } from "express"
const router = Router();

// import controller
import reviewController from "../controllers/reviewController.js";

// import model
import Review from "../models/review.js";

// import middlewares
import reviewMiddleware from "../middleware/reviewMiddleware.js";


// API ROUTES

router.route('/add').post((req, res) => {
    reviewController.addReview(req)
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/').get((req, res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/:id').get((req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/:id/update').put((req, res) => {    
    reviewController.updateReview(req)
      .then(() => res.json('Review updated successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
})


router.route('/:id/delete').delete((req, res) => {    
    reviewController.deleteReview(req.params.id)    
      .then(() => res.json('Review deleted successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
})

export default router