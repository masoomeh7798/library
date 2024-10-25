import catchAsync from "../Utils/catchAsync.js"
import Category from "../Models/CategoryMd.js"
import ApiFeatures from "../Utils/apiFeatures.js"

export const getAll=catchAsync(async(req,res,next)=>{
    const features=new ApiFeatures(Category,req?.query).filters().sort().limitFields().paginate().secondPopulate('subCategory')
    const categories=await features.model
    const count=await Category.countDocuments(req?.query?.filters)
    return res.status(201).json({
        success:true,
        data:{categories,count},
    })
})

export const getOne=catchAsync(async(req,res,next)=>{
    const category=await Category.findById(req?.params.id).populate('subCategory')
    return res.status(200).json({
        success:true,
        data:{category}
    })
})

export const create=catchAsync(async(req,res,next)=>{
    const category=await Category.create(req?.body)
    return res.status(200).json({
        success:true,
        data:{category},
        message:'category successfully created.'

    })
})

export const update=catchAsync(async(req,res,next)=>{
    const category=await Category.findByIdAndUpdate(req?.params.id,req?.body,{new:true})
    return res.status(200).json({
        success:true,
        data:{category}
    })
})

