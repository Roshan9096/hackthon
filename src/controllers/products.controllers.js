const express = require('express')
const {Product} = require('../models/products.models')

const createProduct = async(req,res)=>{
    //get product details from frontend
    // validation -not empty
    //check if product already exists
    //check for product creation
    //return response
    const {name,stock,low_stock_threshold} = req.body;
    if(!name||!stock||!low_stock_threshold){
        const err = new Error("All fields required");
        err.statusCode = 400;
        throw err;

        
    }
    const existedProduct = await Product.findOne({name});
    if(existedProduct){
        const err = new Error("Product already exists");
        err.statusCode = 409;
        throw err;
    }
    try{
        const product = await Product.create(req.body);

        const Productcreated = await Product.findById(product._id);

        if(!Productcreated){
            const err =  new Error("Product not created");
            err.statusCode=500;
            throw err;
            
        }
        return res.status(201).json({ message: "Product created successfully", product });

    }catch(err){
        res.status(err.statusCode||500).json({ error: err.message });
    }
}

const increaseProduct = async(req,res)=>{
    try{
        const { id: product_id } = req.params;
        const { quantity } = req.body;

        const qty = Number(quantity);
        if (isNaN(qty) || qty <= 0) {
            const err = new Error("Invalid quantity value");
            err.statusCode = 400;
            throw err;
        }
        const product = await Product.findById(product_id);

        if (!product){ 
            const err =  new Error("Product not found");
            err.statusCode=404;
            throw err;
        }

        product.stock += qty;
        await product.save();

        return res.status(201).json({ message: "Product increased successfully", product });

    }catch(err){
        res.status(err.statusCode||500).json({ error: err.message });
    }
}

const decreaseProduct = async(req,res)=>{
    try{
        const { id: product_id } = req.params;
        const { quantity } = req.body;

        const qty = Number(quantity);
        if (isNaN(qty) || qty <= 0) {
            const err = new Error("Invalid quantity value");
            err.statusCode = 400;
            throw err;
        }
        const product = await Product.findById(product_id);

        if (!product){ 
            const err =  new Error("Product not found");
            err.statusCode=404;
            throw err;
        }

        if (product.stock < qty) {
            const err = new Error("Insufficient stock");
            err.statusCode = 400;
            throw err;
        }

        product.stock -= qty;
        await product.save();

        return res.status(201).json({ message: "Product decreased successfully", product });

    }catch(err){
        res.status(err.statusCode||500).json({ error: err.message });
    }
}

const getlowstockproduct = async (req,res)=>{
    try{
        const product = await Product.find({ $expr: { $lt: ["$stock", "$low_stock_threshold"] } });
        res.json(product)

    }catch(err){
        res.status(err.statusCode||500).json({ error: err.message });
    }
}

const getallproduct = async (req,res)=>{
    try{
        const product = await Product.find();
        res.json(product)

    }catch(err){
        res.status(err.statusCode||500).json({ error: err.message });
    }
}
module.exports = { 
    createProduct,
    increaseProduct,
    decreaseProduct,
    getlowstockproduct,
    getallproduct
 };