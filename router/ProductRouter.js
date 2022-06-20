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

router.post("/product/review", async (req, resp) => {
    const {words} = req.body;
    
    const review = new Review({
        createdTime: new Date(),
        desc: words,
    });

    await review.save();

    resp.send("Review submitted!");
});




module.exports = router;
