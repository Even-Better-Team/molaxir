import express from "express";
import * as shopController from "../controllers/shopController";

const router = express.Router();

router.get("/", shopController.getShopProducts);

export default router;
