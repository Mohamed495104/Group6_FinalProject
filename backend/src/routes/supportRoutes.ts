import express from "express";
import { createSupportMessage, getAllSupportMessages } from "../controllers/supportController.js";

const router = express.Router();

router.post("/", createSupportMessage);
router.get("/", getAllSupportMessages);

export default router;
