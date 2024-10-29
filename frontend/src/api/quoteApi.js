// const API_URL = import.meta.env.VITE_API_URL;

const quote = async (formData) => {
  try {
    const response = await fetch("https://appmingle-media-backend.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error handling quote:", error);
    throw new Error("Failed to send quote");
  }
};

export default quote;
