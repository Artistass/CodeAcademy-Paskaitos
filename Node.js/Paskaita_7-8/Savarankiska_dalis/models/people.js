import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number
});

export default mongoose.model("People", peopleSchema);