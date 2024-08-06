import mongoose from "mongoose"


const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required: true,
        ref: "Category",
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})


export default  mongoose.model("Product",productSchema)