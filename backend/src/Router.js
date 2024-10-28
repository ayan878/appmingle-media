import express from "express";
import quotes from "./controllers/quoteController.js";

const router = express.Router();
router.post("/", quotes);

export default router;
