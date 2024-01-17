const mongoose = require('mongoose');

const categorie = new mongoose.Schema({

})


const productSchema = new mongoose.Schema({
    sku: Number, 
    name: String,
    price: String,
    precio: Number,
    image: String,
    descripcion: String,
    size: String,
    stock: String
})

const Product = mongoose.model("productos", productSchema)

module.exports = Product;