const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    stock:{
        type:Number,
        default:0,

    },
    low_stock_threshold:{
        type:Number,
        default:0
    }
    
},{timestamps:true})


 const Product= mongoose.model('Product',ProductSchema);
module.exports={Product}