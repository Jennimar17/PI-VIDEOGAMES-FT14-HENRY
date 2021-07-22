import axios from 'axios'
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  GET_ALL_GENRES,
  ORDER_BY,
} from "../utils/constants.js";

export function getAllVideogames(query) {
  return function (dispatch) {
    axios.get("http://localhost:3001/videogames" + query).then((response) => {
      dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data });
    });
  };
};

export function addVideogame(payload) {
  let post = {
    name: payload.name,
    description: payload.description,
    rating: payload.rating,
    image: payload.image,
    platforms: payload.platforms,
    genres: payload.genres,
    released: payload.date,
  };
  return function () {
    axios.post("http://localhost:3001/videogame", post);
  };
};

export function getVideogameDetail(id) {
  return function (dispatch) {
    axios.get("http://localhost:3001/videogames/" + id).then((response) => {
      dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });
    });
  };
};

export function getAllGenres() {
  return function (dispatch) {
    axios.get("http://localhost:3001/genres").then((response) => {
      dispatch({ type: GET_ALL_GENRES, payload: response.data });
    });
  };
};

export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
  };
};


