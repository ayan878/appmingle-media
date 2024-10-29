import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const postsModel = mongoose.model("posts", postsSchema);

export default postsModel;
