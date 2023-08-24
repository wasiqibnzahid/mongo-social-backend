import express from "express";
import dotenv from "dotenv";
import { v1Routes } from "./routes/v1";
import { ab, setAb } from "./routes/v1/auth/auth";
const port = process.env.PORT || 3000;
dotenv.config();

const app = express();
app.use("/v1", v1Routes);
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
