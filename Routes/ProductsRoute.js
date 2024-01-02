const express = require('express');
const auth = require('../middleware/auth')
const {getProducts, createProduct} = require('../controllers/productController')

const productRouter = express.Router();


productRouter.route('/products')
    .get(auth, getProducts)

productRouter.route("/createProduct")
    .post(createProduct)


module.exports = productRouter;