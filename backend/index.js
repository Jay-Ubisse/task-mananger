const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () =>
  console.log(`Aplicacao rodando em http://localhost:${port}`)
);
