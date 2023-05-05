import dotenv from "dotenv";
dotenv.config();

import { creatApp } from "./app.js";
import { appDataSource } from "./models/index.js";

export const startServer = async () => {
  const app = creatApp();
  const PORT = process.env.PORT;

  await appDataSource
    .initialize()
    .then(() => {
      const server = app.listen(PORT, () => {
        console.log(`server is listening on ${PORT}👌`);
      });
    })
    .catch((err) => {
      console.log(`Failed server connect❌`);
      appDataSource.destroy();
    });
};

startServer();
