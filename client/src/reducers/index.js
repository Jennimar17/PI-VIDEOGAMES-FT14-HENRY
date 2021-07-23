import {
  GET_ALL_VIDEOGAMES,
  /*   ADD_VIDEOGAME, */
  GET_VIDEOGAME_DETAIL,
  GET_ALL_GENRES,
  ORDER_BY,
} from "../utils/constants.js";

const initialState = {
  games: [],
  gamesAPI: [],
  gameDetail: [],
  genres: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return { ...state, games: action.payload, gamesAPI: action.payload };
    case GET_VIDEOGAME_DETAIL:
      return { ...state, gameDetail: action.payload };
    case GET_ALL_GENRES:
      return { ...state, genres: action.payload };
    case ORDER_BY:
      if (action.payload === "default") {
        return { ...state, games: state.gamesAPI };
      }
      if (action.payload === "A-Z") {
        return {
          ...state,
          games: [...state.gamesAPI].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }
      if (action.payload === "Z-A") {
        return {
          ...state,
          games: [...state.gamesAPI].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }
      if (action.payload === "desc") {
        return {
          ...state,
          games: [...state.gamesAPI].sort(
            (prev, next) => prev.rating - next.rating
          ),
        };
      }
      if (action.payload === "asc") {
        return {
          ...state,
          games: [...state.gamesAPI].sort(
            (prev, next) => next.rating - prev.rating
          ),
        };
      } else {
        return {
          ...state,
          games: state.gamesAPI.filter((game) => {
            return game.genres.find((genre) => {
              return genre.name === action.payload;
            });
          }),
        };
      }
    default:
      return state;
  }
}

export default reducer;
