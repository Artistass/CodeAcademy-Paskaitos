import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  membership_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membership",
    required: true
  }
});

export default mongoose.model("User", userSchema);