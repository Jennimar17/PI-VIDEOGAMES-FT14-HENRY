import React from "react";
import { connect } from "react-redux";
import { getAllVideogames } from "../../actions/index";
import "./SearchBar.css";

function SearchBar({ getAllVideogames }) {
  const [input, setInput] = React.useState({
    search: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="searchbar-style">
      <input
        name="search"
        onChange={handleInputChange}
        value={input.search}
      ></input>
      <button onClick={() => getAllVideogames(`?name=${input.search}`)}>
        SEARCH
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllVideogames: (query) => dispatch(getAllVideogames(query)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
