import express from "express";
import { createOrUpdateUser, getUserByFirebaseUid } from "../controllers/userController";

const router = express.Router();

// Create or update user
router.post("/", createOrUpdateUser);

// Get user by Firebase UID
router.get("/:firebaseUid", getUserByFirebaseUid);

export default router;
