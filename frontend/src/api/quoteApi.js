const quote = async (formData) => {
  try {
    const response = await fetch("http://192.168.0.106:3000", {
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



