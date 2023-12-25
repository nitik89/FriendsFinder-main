// models/user.ts
import { Schema, model, Document, Types } from 'mongoose';
import { interestsSchema, Interest } from './interests';

export interface User extends Document{
  fullName: string;
  email: string;
  profilePic?: string;
  blockedUsers: Types.ObjectId[];
  interests: Interest[];
  gender?: 'Male' | 'Female' | 'Other';
  dob: Date;
  age?: number;
  friends: Types.ObjectId[];
}

const userSchema = new Schema<User>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String, default: 'default-profile-pic-url.jpg' },
  blockedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  interests: [interestsSchema],
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  dob: { type: Date, required: true },
  age: { type: Number },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Calculate age from dob
userSchema.pre('save', function (this: User , next) {
  if (this.dob) {
    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }
  next();
});

export const UserModel = model<User>('User', userSchema);
