import express from "express";
import productRouter from "./productRouter.js";
import qnaRouter from "./qnaRouter.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/qna", qnaRouter);

export default router;
