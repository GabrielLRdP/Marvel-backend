const axios = require("axios");
const express = require("express");
const router = express.Router();

const apiKey = process.env.API_KEY;

// Index : /characters => all characters
//         /character/:id => a specific character

// Route that get all marvels characters.
// Empty query will return every characters with a limit of 100
// Possibles querys : limitations of results, skip results (for pagination) and name

router.get("/characters", async (req, res) => {
  const url = `https://lereacteur-marvel-api.herokuapp.com/characters`;
  const limit = req.query.limit || "";
  const skip = req.query.skip || "";
  const name = req.query.name || "";

  try {
    const response = await axios.get(
      `${url}?apiKey=${apiKey}&limit=${limit}&skip=${skip}&name=${name}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Route that get a specific character given his id

router.get("/character/:id", async (req, res) => {
  const url = `https://lereacteur-marvel-api.herokuapp.com/character/`;
  const id = req.params.id;

  try {
    const response = await axios.get(`${url}${id}?apiKey=${apiKey}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
