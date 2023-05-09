import express from "express";
import productController from "../controllers/productController.js";

export const router = express.Router();

router.get("/:productId", productController.router);
