import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      if (process.env.NODE_ENV === "production") {
        throw new Error("MONGODB_URI environment variable is required in production");
      }
      console.warn("MONGODB_URI not set, using local MongoDB");
      await mongoose.connect("mongodb://localhost:27017/citysphere");
    } else {
      await mongoose.connect(mongoURI);
    }
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
