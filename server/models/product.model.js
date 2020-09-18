const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "hey you need a title"],
        minlength: [2, "need longer title"],
        maxlength: [50, "max length is 50"]
    },
    price:{
        type: Number
    },
    description:{
        type: String
    }
},{timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;