import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user_id: [{}],
  date: String,
  comment: String
});

export default mongoose.model("comment", commentSchema);