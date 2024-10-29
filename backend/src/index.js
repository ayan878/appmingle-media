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
    origin: [
      "https://appmingle-media.vercel.app",
      "https://appmingle-media-backend.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(router);

// Root route
app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

const PORT = process.env.PORT || 3000; 
const mongodb_uri = process.env.MONGODB_URI;

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
