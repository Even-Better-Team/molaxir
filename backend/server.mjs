import { createApp } from "./app.js";
import database from "./models/database.js";

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  await database
    .initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`server is listening on ${PORT}👌`);
      });
    })
    .catch((err) => {
      console.log(`Failed server connect❌`);
      database.destroy();
    });
};

startServer();
