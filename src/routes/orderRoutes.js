const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/", orderController.createOrder);

router.get("/list", orderController.getAllOrders);

router.get("/:orderId", orderController.getOrderByNumber);

router.put("/:orderId", orderController.updateOrder);

router.delete("/:orderId", orderController.deleteOrder);

module.exports = router;