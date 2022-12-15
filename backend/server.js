import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";

const morgan = require("morgan");
require("dotenv").config();

// Create express app
const app = express();

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error: " + err));

// Apply Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
