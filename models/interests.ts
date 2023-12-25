// models/interests.ts
import { Schema, model, Document } from 'mongoose';

export interface Interest extends Document{
  name: string;
  description?: string;
}

export const interestsSchema = new Schema<Interest>({
  name: { type: String, required: true },
  description: { type: String },
});

export const InterestModel = model<Interest>('Interest', interestsSchema);
