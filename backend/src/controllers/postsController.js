import postsModel from "../models/postsModel.js";

const createPost = async (req, res) => {
  const { title, content } = req.body; 
  try {
    const post = new postsModel({
      title,
      content, 
    });

    await post.save();
    res
      .status(201)
      .json({ success: true, message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default createPost;
