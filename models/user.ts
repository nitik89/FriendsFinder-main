import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: [true, "Name field is required."],
    minLength: [2, "Name must be 2 character long."],
    type: Schema.Types.String,
  },

  email: {
    required: [true, "Email field is required."],
    type: Schema.Types.String,
    unique: true,
    trim: true,
  },

  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  profilePic: { type: String, default: "default-profile-pic-url.jpg" },
  blockedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  contains_full_details: { type: Boolean, default: false },
  interests: [{ type: Schema.Types.ObjectId, ref: "Interests" }],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
