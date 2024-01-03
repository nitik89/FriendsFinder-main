// models/message.ts
import { Schema, model, Document, Types } from "mongoose";
import { User } from "./users";

export interface Message extends Document {
  sender: Types.ObjectId | typeof User;
  receiver: Types.ObjectId | typeof User;
  content: string;
  timestamp: Date;
}

const messageSchema = new Schema<Message>({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const MessageModel = model<Message>("Message", messageSchema);
