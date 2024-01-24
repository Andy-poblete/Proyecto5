const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sku: {
        type: Number,
        required: true,
        minLenght: 6,
        maxLenght: 6
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        minLenght: 3,
        maxLenght: 130,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 10000000
    },
    image: String,
    description: {
        type: String,
        required: true,
        lowercase: true,
        minLenght: 3,
        maxLenght: 800,
        trim: true,
    },
    size: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 6,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
})

const Product = mongoose.model("productos", productSchema)

module.exports = Product;