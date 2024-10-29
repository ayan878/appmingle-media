import { useState } from "react";
import blogPost from "../api/postApi";

function Blog() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await blogPost(postData);
      if (response.success) {
        setResponseMessage("Post created successfully");
        setIsSubmit(true);
      } else {
        setResponseMessage("Post creation failed");
      }
    } catch (error) {
      setResponseMessage("An error occurred: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handlePost}
      className="mx-auto w-96 flex flex-col gap-4 mt-8"
    >
      <input
        type="text"
        name="title"
        value={postData.title}
        onChange={handleChange}
        placeholder="Title"
        className="py-2 outline rounded-sm"
        required
      />
      <textarea
        name="content"
        value={postData.content}
        onChange={handleChange}
        placeholder="Content"
        className="py-2 outline rounded-sm"
        required
      />
      <button type="submit" className="bg-sky-400 text-black rounded-sm py-2">
        Submit
      </button>
      {isSubmit && <p>{responseMessage}</p>}
    </form>
  );
}

export default Blog;
