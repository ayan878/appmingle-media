import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://appmingle-media.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    details: err.message,
  });
});


// MongoDB connection and server start
const mongodb_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(`${mongodb_uri}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Export the Express app for Vercel
export default app; 
