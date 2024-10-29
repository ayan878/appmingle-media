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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(express.json());
app.use(router);

// MongoDB connection and server start
const mongodb_uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://ayanraza087:ayan878@cluster0.t9kvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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
