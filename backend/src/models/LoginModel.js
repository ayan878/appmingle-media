import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const loginModel = mongoose.model("login", loginSchema);

export default loginModel;
