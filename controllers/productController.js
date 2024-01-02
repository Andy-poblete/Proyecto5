const Product = require("../models/Product")

const getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, msg: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, msg: error.message})
    }
}

const createProduct = async(req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.json({sucess: true, msg: "Create product!", info: newProduct})

    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports = {getProducts, createProduct}