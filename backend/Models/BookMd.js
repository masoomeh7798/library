import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
    file:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    categoryId:{
       type:mongoose.Schema.Types.ObjectId,ref:'Category'
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
},{timestamps:true})
const Book=mongoose.model('Book',bookSchema)

export default Book