const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    Nombre: String,
    Color: String,
    Talla: String,
    Imagen: String,
    Precio: Number,
    Descripcion: String
})

const Product = mongoose.model("productos", productSchema)

module.exports = Product;