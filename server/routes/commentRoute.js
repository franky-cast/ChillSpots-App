import { Router } from "express"
const router = Router();

// import controller
import commentController from "../controllers/commentController.js";

// import model
import Comment from "../models/comment.js";

// import middlewares


// API ROUTES

router.route('/add').post((req, res) => {
    commentController.addComment(req)
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/').get((req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/:id').get((req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/:id/update').put((req, res) => {    
    commentController.updateComment(req)
      .then(() => res.json('Comment updated successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
})


router.route('/:id/delete').delete((req, res) => {    
    commentController.deleteComment(req.params.id)    
      .then(() => res.json('Comment deleted successfully!'))
      .catch(err => res.status(400).json(`Error updating user: ${err}`));
})


export default router