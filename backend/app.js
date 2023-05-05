import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import { globalErrorHandler } from "./utils/errors.js";

export const creatApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("tiny"));

  app.use(routes);

  app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
  });

  app.use(globalErrorHandler);

  return app;
};
