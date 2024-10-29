import loginModel from "../models/LoginModel.js";

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const userLogged = new loginModel({
      name,
      password,
    });

    await userLogged.save();
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default login;
