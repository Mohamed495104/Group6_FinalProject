import express from "express";
import { createSupportMessage } from "../controllers/supportController";

const router = express.Router();

// POST /api/support
router.post("/", createSupportMessage);

export default router;
