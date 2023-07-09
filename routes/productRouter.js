const express = require("express");
const productsControllers = require("../controllers/product.js");

const router = express.Router();

router.get("/", productsControllers.getProduct);
router.post("/", productsControllers.addProducts);
router.put("/");
router.delete("/");

module.exports = router;
