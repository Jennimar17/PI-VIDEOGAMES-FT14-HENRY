const { Router } = require("express");
const axios = require("axios").default;
require("dotenv").config();
const { API_KEY } = process.env;
const { URL_API, URL_API_RAGW_GENRES } = require("../../constants");
const { sequelize } = require("../db");
const { Genres } = sequelize.models;

const genres = Router();

genres.get("/", (req, res) => {
  axios
    .get(`${URL_API_RAGW_GENRES}${API_KEY}`)
    .then((response) => {
      const genres = response.data.results.map((genre) => (genre = genre.name));
      return Promise.all(
        genres.map((genres) => Genres.findOrCreate({ where: { name: genres } }))
      );
    })
    .then(() => {
      return Genres.findAll();
    })
    .then((response) => {
      res.send(
        response.map((g) => {
          return {
            name: g.name,
            id: g.id,
          };
        })
      );
    });
});

module.exports = genres;
