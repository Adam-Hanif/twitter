const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require("./routes/user.routes"));
app.use(require("./routes/twitt.routes"));
app.use(require("./routes/comment.routes"));

async function startServerAndConnectDB() {
  try {
    await app.listen(3000);
    await mongoose.connect();
    console.log("Сервер запущен");
  } catch (error) {
    console.log("Ошибка при соединении с сервером");
  }
}
startServerAndConnectDB();
