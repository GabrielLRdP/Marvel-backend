const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());

const charactersRoute = require("./Routes/characters");
const comicsRoute = require("./Routes/comics");

app.use(charactersRoute);
app.use(comicsRoute);

app.all("*", (req, res) => {
  res.status(400).json({ message: "404 page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
