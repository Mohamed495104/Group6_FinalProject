import mongoose, { Schema, Document } from "mongoose";

export interface ISupportMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const SupportMessageSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ISupportMessage>("SupportMessage", SupportMessageSchema);
