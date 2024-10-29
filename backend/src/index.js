import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://appmingle-media.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
const PORT = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;
mongoose
  .connect(mongodb_uri)
  .then(
    app.listen(PORT, (req, res) => {
      console.log(`server is started on http://localhost:3000`);
    })
  )
  .catch((error) => {
    console.error(error);
  });
