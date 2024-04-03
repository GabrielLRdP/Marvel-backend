const axios = require("axios");
const express = require("express");
const router = express.Router();

const apiKey = process.env.API_KEY;

// Index : /comics => all comics
//         /comics/:characterId => all comics containing a given character
//         /comic/:comicId => a specific comic

//A route that get all the marvels comics, with a limit of 100.
//possibility to query a limit of result, also to skip a certain amount of result for pagination management.
//also a possibility to query names, the route will return comics that contains the query.

router.get("/comics", async (req, res) => {
  const url = `https://lereacteur-marvel-api.herokuapp.com/comics`;
  const limit = req.query.limit || "";
  const skip = req.query.skip || "";
  const title = req.query.title || "";

  try {
    console.log(title);
    const response = await axios.get(
      `${url}?apiKey=${apiKey}&limit=${limit}&skip=${skip}&title=${title}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
});
//A route that get a list of every comics containing a specific character given his id

router.get("/comics/:characterId", async (req, res) => {
  const url = `https://lereacteur-marvel-api.herokuapp.com/comics/`;
  const id = req.params.characterId;

  try {
    const response = await axios.get(`${url}${id}?apiKey=${apiKey}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//A route that get all information about a comic given its id

router.get("/comic/:comicId", async (req, res) => {
  const url = `https://lereacteur-marvel-api.herokuapp.com/comic/`;
  const id = req.params.comicId;

  try {
    const response = await axios.get(`${url}${id}?apiKey=${apiKey}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
