import express, { Express, Request, Response } from "express";
import connectToDatabase from "../db/index";
import dotenv from "dotenv";
import  mongoose from "mongoose";
import cors from "cors";
import admin from "../routes/admin";
import tournament from "../routes/tournament";
dotenv.config();

const app: Express = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToDatabase();
app.use("/admin", admin);
app.use("/tournaments", tournament);

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Running");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});