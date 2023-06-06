const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is a required field"],
        minLength: [2, "Title must be at least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is a required field"],
        min: [1, "This item has to be at least a dollar"]
    },
    description: {
        type: String,
        required: [true, "Description is a required field"],
        min: [10, "Description must be at least 10 characters"]
    }
}, {timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema);