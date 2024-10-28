import userModel from "../models/userModel.js";

const quotes = async (req, res) => {
  try {
    const { name, phone, email, service } = req.body;

    const quote = new userModel({
      name,
      phone,
      email,
      service,
    });

    const savedQuote = await quote.save();
    res.status(201).json({
      message: "Quotation sent successfully",
      quote: savedQuote,
    });
  } catch (error) {
    console.error("Error saving quote:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default quotes;
