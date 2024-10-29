import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const postsModel = mongoose.model("login", postsSchema);

export default postsModel;
