import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Filters.css";

function Filters({ SearchVideogames, order, genres }) {
  const handleSelect = (e) => {
    order(e.target.value);
  };
  return (
    <div className="custom-dropdown">
      <button className="button-style">
        <Link to="/home">HOME</Link>
      </button>
      <select onChange={handleSelect} name="" id="">
        <option value="default" selected>
          Default
        </option>
        <optgroup label="Alphabetic">
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </optgroup>
        <optgroup label="Rating">
          <option value="asc">Higher to lower</option>
          <option value="desc">Lower to higher</option>
        </optgroup>
        <optgroup label="Genres">
          {genres &&
            genres.map((g) => <option value={g.name}>{g.name}</option>)}
        </optgroup>
      </select>
      <SearchBar SearchVideogames={SearchVideogames} />
      <button className="button-style">
        <Link to="/home/addVideoGame">New Videogame</Link>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

export default connect(mapStateToProps, null)(Filters);
