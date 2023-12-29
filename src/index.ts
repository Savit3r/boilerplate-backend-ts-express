// Importing dependencies
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Importing .env validation
import validateEnv from "@/utils/validateEnv";

// App variables
dotenv.config();
validateEnv();

const app = express();

// Dependencies
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", (req, res) => {
  res.send("Hello World");
});

// Export
module.exports = app;

/**
 * @template @tutorial https://medium.com/@it.ermias.asmare/setting-up-expressjs-and-typescript-cfbee581c678
 */
