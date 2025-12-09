import express from "express";
import { createSupportMessage, getAllSupportMessages } from "../controllers/supportController.js";

const router = express.Router();

// TODO: Add rate limiting middleware to prevent abuse
// Example: Use express-rate-limit to limit requests per IP
router.post("/", createSupportMessage);
router.get("/", getAllSupportMessages);

export default router;
