import mongoose, { mongo } from "mongoose"
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    phone: {
        type: String,
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g, 'format isnt matched'],
        required: [true, 'phone number is required'],
        unique: [true, 'phone is already taken'],

    },
    email: {
        type: String,
        unique: [true, 'email is already taken'],
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'format isnt matched'],
        required: [true, 'phone number is required'],
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'superAdmin'],
        default: 'user'
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }

}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User