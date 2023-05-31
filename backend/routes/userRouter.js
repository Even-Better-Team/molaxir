import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post("/verification", userController.verification);
router.post("checkverify", userController.checkverify);
router.post("/signup", userController.signup);

export default router;
