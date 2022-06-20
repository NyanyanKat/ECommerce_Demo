const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, require: true, unique: true},
    email: { type: String, require: true, unique: true} ,
    password: { type: String, require: true},
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order',
    }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;