import express from "express";
import productRouter from "./productRouter.js";
//import qnaRouter from "./qnaRouter.js";
import shopRouter from "./shopRouter.js";
import searchRouter from "./searchRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/shop", shopRouter);
router.use("/search", searchRouter);
router.use("/users", userRouter);
// router.use("/qna", qnaRouter);

export default router;
