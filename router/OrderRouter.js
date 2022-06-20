const router = require("express").Router();
const Order = require("../model/Order");
const {auth_session} = require("../middleware/auth")

router.get("/user/order", auth_session, async (req, resp) => {
    console.log("Getting Order....");
    await Order.find({})
        .populate("products")
        .exec((err, res) => {
            resp.render("orderlist", { res });
        })
});



module.exports = router;