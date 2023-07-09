const express = require("express");
const productsControllers = require("../controllers/product.js");

const router = express.Router();

router.get("/", productsControllers.getProduct);
router.get("/:id", productsControllers.getProductById);
router.post("/", productsControllers.addProducts);
router.put("/:id", productsControllers.updateProduct);
router.delete("/:id", productsControllers.deleteProducts);

module.exports = router;
