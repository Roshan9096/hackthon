const express = require('express');
const { createProduct, getallproduct, getlowstockproduct, increaseProduct, decreaseProduct, } = require('../controllers/products.controllers');
const router = express.Router();

//List all Products
router.route('/').get(getallproduct)
//get product below their threshold
router.route('/lowstock').get(getlowstockproduct)
//Create a new product
router.route('/').post(createProduct);
///Increase stock quantity
router.route('/:id/increase').patch(increaseProduct)
//Decrease stock quantity
router.route('/:id/decrease').patch(decreaseProduct)

module.exports={
    router
}