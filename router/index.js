const router = require('express').Router();

const OrderRouter = require("./OrderRouter");
const ProductRouter = require("./ProductRouter");
const UserRouter = require("./UserRouter");

router.use(UserRouter);
router.use(ProductRouter);
router.use(OrderRouter);

module.exports = router;