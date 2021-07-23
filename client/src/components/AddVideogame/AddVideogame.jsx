import React from "react";
import { connect } from "react-redux";
import { addVideogame } from "../../actions/index";
import { useHistory } from "react-router-dom";
import "./AddVideogame.css";

function AddVideoGame({ addVideogame, genres }) {
  const [input, setInput] = React.useState({
    name: "",
    description: "",
    date: "",
    rating: "0",
    platforms: [],
    genres: [],
  });

  const history = useHistory();

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = function (e) {
    let select = e.target.selectedOptions;
    let selected = [];
    for (var i = 0; i < select.length; i++) {
      selected.push(select[i].value);
    }
    selected = selected.map((genre) => parseInt(genre));
    setInput({
      ...input,
      genres: selected,
    });
  };

  const handlePlatforms = function (e) {
    if (!e.target.value) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        !input.platforms.find(
          (p) => p.platform.name.toLowerCase() === e.target.value.toLowerCase()
        )
      ) {
        setInput({
          ...input,
          platforms: [
            ...input.platforms,
            { platform: { name: e.target.value } },
          ],
        });
      }
      e.target.value = "";
    }
  };

  const filterPlatform = function (e) {
    setInput({
      ...input,
      platforms: input.platforms.filter(
        (p) => p.platform.name !== e.target.value
      ),
    });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    addVideogame(input);
    history.push("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <label>Name</label>
            <input
              placeholder="name"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              placeholder="description"
              type="text"
              name="description"
              onChange={handleInputChange}
              value={input.description}
              required
            ></textarea>
          </div>
          <div>
            <label>Released</label>
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              value={input.date}
            ></input>
          </div>
          <div>
            <label>Rating</label>
            <div>
              <input
                type="number"
                min="0"
                max="5"
                name="rating"
                onChange={handleInputChange}
                value={input.rating}
              />
              {input.rating >= "1" && "x"}
              {input.rating >= "2" && "x"}
              {input.rating >= "3" && "x"}
              {input.rating >= "4" && "x"}
              {input.rating === "5" && "x"}
            </div>
          </div>
          <div>
            <label>Platforms</label>
            <input
              placeholder="platfiorms"
              type="text"
              name="platforms"
              onKeyDown={handlePlatforms}
            />
            <div>
              {input.platforms &&
                input.platforms.map((p) => (
                  <span>
                    <span style={{ paddingRight: "10px" }}>
                      {p.platform.name.toUpperCase()}
                    </span>
                    <button
                      value={p.platform.name}
                      onClick={(e) => filterPlatform(e)}
                    >
                      X
                    </button>
                  </span>
                ))}
            </div>
          </div>
          <div>
            <label>Genres</label>

            <select multiple size="5" onChange={handleSelect} /* required */>
              {genres &&
                genres.map((g) => <option value={g.id}>{g.name}</option>)}
            </select>
          </div>
          <input type="submit" value="Create Game" />
        </div>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addVideogame: (input) => dispatch(addVideogame(input)),
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoGame);
