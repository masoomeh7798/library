import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }

},{timestamps:true})
const Category=mongoose.model('Category',categorySchema)

export default Category