import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();

// CORS setup
app.use(
  cors({
    origin: ["https://appmingle-media.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware for parsing JSON
app.use(express.json());
app.use(router);

// Root route for basic response check
app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// MongoDB URI from environment variables
const mongodb_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// MongoDB connection with additional options
mongoose
  .connect(mongodb_uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Error handling middleware for uncaught errors
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
