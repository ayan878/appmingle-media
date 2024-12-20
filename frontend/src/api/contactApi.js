const API_URL =
  import.meta.env.VITE_API_URL || "https://appmingle-media-backend.vercel.app";

const contact = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact-us`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error handling quote:", error);
    throw new Error("Failed to send quote");
  }
};

export default contact;
