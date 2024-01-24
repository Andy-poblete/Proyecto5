const Product = require("../models/Product")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, message: "Lista de productos", info: products })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        res.json({ success: true, message: "Se ha cargado el producto", product })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}


const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.json({ sucess: true, message: "Producto Creado!", info: newProduct })

    } catch (error) {
        res.status(500).json({ success: false, msg: error.message })
    }
}


const editProduct = async (req, res) => {

    const { id } = req.params;
    const { sku, name,  price, image, size, stock} = req.body

    try {
        const productEdit = await Product.findByIdAndUpdate(id, { sku, name,  price, image, size, stock }, { new: true })
        res.status(201).json({
            success: true,
            message: "Producto editado con exito!!",
            productEdit
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }


}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productDelete = await Product.findByIdAndDelete(id)

        res.json({
            success: true,
            message: "El producto ha sido eliminado correctamente!",
            productDelete
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


const reduceStock = async (req, res) => {
    const productPurchased = req.body.cartItems;
    try {
        productPurchased.map(async (product) => {
            await Product.findByIdAndUpdate(product._id, { stock: product.stock - product.quantity })
        })
        res.status(201).json({ success: true, message: "Se ha reducio el stocks de los productos" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports = { getProducts, createProduct, getProductById, editProduct, deleteProduct, reduceStock }