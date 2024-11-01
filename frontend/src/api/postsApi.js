const API_URL =
  import.meta.env.VITE_API_URL || "https://appmingle-media-backend.vercel.app";

const blogPost = async (postData) => {
  try {
    const response = await fetch(`${API_URL}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export default blogPost;
