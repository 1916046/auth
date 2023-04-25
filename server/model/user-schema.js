import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  phone: String,
  email: String,
});

const user = mongoose.model('Contact', userSchema);

export default user;
