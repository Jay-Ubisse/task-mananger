const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/task-routes");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/task-routes"));

app.listen(port, () =>
  console.log(`Aplicacao rodando em http://localhost:${port}`)
);
