const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    desc: {
        type: String,
        require: true,
    },
    createdTime: {
        type: Date,
        require: true,
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;


