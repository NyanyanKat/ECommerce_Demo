const router = require("express").Router();
const Product = require("../model/Product");


router.get("/product/apple/:id", async (req, resp) => {
    const {id} = req.params;
    const item = await Product.findOne({id: id});
    if(item) {
        resp.render("productlist", {item});
    }
    else {
        console.log("Product not found");
    }
});


router.get("/product/google/:id", async (req, resp) => {
    const {id} = req.params;
    const item = await Product.findOne({id: id});
    if(item) {
        console.log("Found product");
        resp.render("productlist", {item});
    }
    else {
        console.log("Product not found");
    }
});




module.exports = router;