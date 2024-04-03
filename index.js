const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());

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
