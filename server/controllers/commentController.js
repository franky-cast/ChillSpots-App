import Comment from "../models/comment.js"

// handler functions
const addReply = (req) => {
    const { userId, content, timestamp } = req.body

    const newComment = new Comment ({
        userId,
        content,
        timestamp
    })

    return newComment.save()
}

const updateComment = (req) => {
    const commentId = req.params.id;
    const updatedCommentData = req.body;
    return Comment.findByIdAndUpdate(commentId, updatedCommentData, { new: true })
};

const deleteComment = (commentId) => {
    return Comment.findByIdAndDelete(commentId)
};


export default {
    addComment,
    updateComment,
    deleteComment
}