const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        unique: true,
        require: true,
        type: Number,
    },
    name: {
        unique: true,
        require: true,
        type: String,
    },
    desc: String,
    price: {
        require: true,
        type: Number,
        min: [0, "Price cannot be negative"],
    },
    quantity: {
        require: true,
        type: Number,
        min: [0, "Quantity cannot be negative"],
    },
    category: {
        type: String,
    },
    url: {
        require: true,
        type:String,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
    },
});

const Product = mongoose.model("Product", productSchema);


module.exports = Product;


