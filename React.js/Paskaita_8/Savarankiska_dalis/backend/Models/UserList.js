import mongoose from "mongoose";

const userListScheme = new mongoose.Schema ({
  name: String,
  userName: String,
  email: String
});

export default mongoose.model("UserList", userListScheme);