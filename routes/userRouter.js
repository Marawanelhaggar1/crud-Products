const express = require("express");
const usersControllers = require("../controllers/users.js");

const router = express.Router();

router.get("/", usersControllers.getUsers);
router.post("/", usersControllers.addusers);
router.post("/:id/products/:productId", usersControllers.addProductsToUser);
router.put("/:id", usersControllers.updateUser);
router.delete("/:id", usersControllers.deleteUser);

module.exports = router;
