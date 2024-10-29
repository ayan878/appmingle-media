import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://appmingle-media.vercel.app", "http://localhost:5173"],
  })
);

app.use(express.json());
app.use(router);

const PORT=process.env.PORT
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
