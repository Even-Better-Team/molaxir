import express from "express";
import * as productController from "../controllers/productController";

const router = express.Router();

router.get("/:productId", productController.getProductDetail);
router.get("/", productController.getMainProducts);

export default router;
