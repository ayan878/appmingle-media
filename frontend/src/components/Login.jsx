import { useState } from "react";
import login from "../api/postApi";

function Login() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      if (response.success) {
        setResponseMessage("Successfully login");
        setIsSubmit(true);
      } else {
        setResponseMessage("login failed");
      }
    } catch (error) {
      setResponseMessage(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="mx-auto w-96 flex flex-col gap-4 mt-8">
      <input
        type="text"
        name="name"
        value={loginData.name}
        onChange={handleChange}
        placeholder="Name"
        className="py-2 outline rounded-sm"
      />
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
        className="py-2 outline rounded-sm"
      />
      <button
        onSubmit={handleLogin}
        className="bg-sky-400 text-black rounded-sm py-2"
      >
        Login
      </button>
      {isSubmit ? <p>{responseMessage}</p> : ""}
    </form>
  );
}

export default Login;
