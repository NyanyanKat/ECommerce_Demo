const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    desc: String,
    url: {
        type: String,
        require: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;

