import dotenv from "dotenv";
dotenv.config();

import { creatApp } from "./app.js";
import database from "./models/database.js";

const startServer = async () => {
  try {
    await database;
    const app = creatApp();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}👌`);
    });
  } catch (err) {
    console.log(`Failed server connect❌`);
    database.destroy();
  }
};

startServer();
