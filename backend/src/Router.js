import express from "express";
import quotes from "./controllers/quoteController.js";
import createPost from "./controllers/postsController.js";
import sendSms from "./controllers/smsController.js";

const router = express.Router();

router.post("/", quotes);
router.post("/contact-us", quotes);
router.post("/", sendSms);

router.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

router.post("/blog", createPost);

export default router;
