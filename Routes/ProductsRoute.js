const express = require('express');
const {  getProducts, getProductById, reduceStock } = require('../controllers/productController')

const productRouter = express.Router();


productRouter.route('/products')
    .get(getProducts)


productRouter.route("/product/:id")
    .get(getProductById)

productRouter.route("/reduceStock")
    .put(reduceStock)

module.exports = productRouter;