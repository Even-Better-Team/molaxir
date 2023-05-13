import express from "express";
import productRouter from "./productRouter.js";
import qnaRouter from "./qnaRouter.js";
import shopRouter from "./shopRouter.js";

const router = express.Router();

router.use("/products", productRouter);
// router.use("/qna", qnaRouter);
router.use("/shop", shopRouter);

export default router;
