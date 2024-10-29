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

    // const savedQuote = await quote.save();
     console.time("Save Operation");
     const savedQuote = await quote.save();
     console.timeEnd("Save Operation");

    res.status(201).json({
      success: true,
      message: "Quotation sent successfully",
      quote: savedQuote,
    });
  } catch (error) {
    console.error("Error saving quote:", error);
    res.status(500).json({
      success: false, 
      message: "Internal server error",
    });
  }
};

export default quotes;
