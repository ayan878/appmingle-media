import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const mongodb_uri = process.env.MONGODB_URI;
mongoose
  .connect(mongodb_uri)
  .then(
    app.listen(3000, (req, res) => {
      console.log(`server is started on http://localhost:3000`);
    })
  )
  .catch((error) => {
    console.error(error);
  });

app.use(router);
