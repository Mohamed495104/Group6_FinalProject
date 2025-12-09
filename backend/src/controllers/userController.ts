import { Request, Response } from "express";
import User from "../models/User";

export const createOrUpdateUser = async (req: Request, res: Response) => {
  try {
    const { firebaseUid, email, name } = req.body;

    if (!firebaseUid?.trim() || !email?.trim() || !name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid firebaseUid, email, and name",
      });
    }

    // Check if user exists, if so update, otherwise create
    let user = await User.findOne({ firebaseUid: firebaseUid.trim() });

    if (user) {
      // Update existing user
      user.email = email.trim();
      user.name = name.trim();
      await user.save();
    } else {
      // Create new user
      user = new User({
        firebaseUid: firebaseUid.trim(),
        email: email.trim(),
        name: name.trim(),
      });
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: user ? "User updated successfully" : "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create/update user",
    });
  }
};

export const getUserByFirebaseUid = async (req: Request, res: Response) => {
  try {
    const { firebaseUid } = req.params;

    if (!firebaseUid) {
      return res.status(400).json({
        success: false,
        message: "Firebase UID is required",
      });
    }

    const user = await User.findOne({ firebaseUid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
};
