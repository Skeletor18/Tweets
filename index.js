const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.use(require('./routes/tweets.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/users.route'))

mongoose
  .connect(
    "mongodb+srv://skeletor:akhmed20020918@cluster0.bcycud5.mongodb.net/Tweets?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Start  http://localhost:3000")
});
