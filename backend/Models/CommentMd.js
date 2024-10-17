import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true,
        required: [true, 'Content is required']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    reply: {
        type: Array,
        default: []
    },
    isPublish: {
        type: Boolean,
        default: false
    },
    rating:{
        type:Number,
        min:1,
        max:5
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)
export default Comment