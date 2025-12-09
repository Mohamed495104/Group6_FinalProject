import { Request, Response } from "express";
import SupportMessage from "../models/SupportMessage.js";

export const createSupportMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    const supportMessage = new SupportMessage({
      name,
      email,
      message,
    });

    await supportMessage.save();

    res.status(201).json({
      success: true,
      message: "Support message received successfully",
      data: supportMessage,
    });
  } catch (error) {
    console.error("Error creating support message:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit support message",
    });
  }
};

export const getAllSupportMessages = async (req: Request, res: Response) => {
  try {
    const messages = await SupportMessage.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching support messages:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch support messages",
    });
  }
};
