import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./source/routes/users.js";
import { recipesRouter } from "./source/routes/recipes.js";

const Database = process.env.Database;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose
  .connect(Database)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("connection failed");
  });

app.listen(3001, () => console.log("Server running on port 3001"));
