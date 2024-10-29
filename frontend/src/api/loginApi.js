const API_URL =
  import.meta.env.VITE_API_URL || "https://appmingle-media-backend.vercel.app";
const login = async (loginData) => {
  try {
    const response = await fetch(`${API_URL}/blog`, {
      method: "POST",
      headers: {
        "Content-type": "application",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export default login;
