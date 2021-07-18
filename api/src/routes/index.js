require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const { API_KEY } = process.env;
const { sequelize, Op } = require("../db");
const { Videogame, Genres } = sequelize.models;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogames = require("./videogames.js");
const videogame = require("./videogame.js");
const genres = require("./genres.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

router.use("/videogames", videogames);
router.use("/videogame", videogame);
router.use("/genres", genres);

module.exports = router;
