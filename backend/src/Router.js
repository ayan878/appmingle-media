import express from "express";
import quotes from "./controllers/quoteController.js";

const router = express.Router();

router.post("/test", quotes);

router.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// router.post("/test", (req, res) => {
//   res.status(200).json({ success: true, message: "Test successful!" });
// });

export default router;
