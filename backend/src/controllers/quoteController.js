// import userModel from "../models/userModel.js";

// const quotes = async (req, res) => {
//   try {
//     const { name, phone, email, service } = req.body;

//     const quote = new userModel({
//       name,
//       phone,
//       email,
//       service,
//     });

//     const savedQuote = await quote.save();
   
//     res.status(201).json({
//       success: true,
//       message: "Quotation sent successfully",
//       quote: savedQuote,
//     });
//   } catch (error) {
//     console.error("Error saving quote:", error);
//     res.status(500).json({
//       success: false, 
//       message: "Internal server error",
//     });
//   }
// };

// export default quotes;


const quotes = async (req, res) => {
  console.log("Received request:", req.body);
  try {
    const { name, phone, email, service } = req.body;

    console.time("Database Save");
    const quote = new userModel({ name, phone, email, service });
    const savedQuote = await quote.save();
    console.timeEnd("Database Save");

    res
      .status(201)
      .json({
        success: true,
        message: "Quotation sent successfully",
        quote: savedQuote,
      });
  } catch (error) {
    console.error("Error saving quote:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
