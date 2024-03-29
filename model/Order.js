const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    desc: String,
    user: {
        type: Schema.Types.ObjectId,
    },
    createdTime: {
        type: Date,
        require: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


