import express from "express";
import * as shopController from "../controllers/shopController.js";

const router = express.Router();

router.get("/", shopController.getShopProducts);

export default router;
