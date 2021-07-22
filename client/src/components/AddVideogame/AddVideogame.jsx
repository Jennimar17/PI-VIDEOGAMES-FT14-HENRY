import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { addVideogame } from "../../actions/index";
import { useHistory } from "react-router-dom";

function AddVideoGame({ addVideogame, genres }) {
  const [input, setInput] = React.useState({
    name: "",
    description: "",
    date: "",
    rating: "0",
    platforms: [],
    genres: [],
    image: "",
  });

  const history = useHistory();

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputImage = function (files) {
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "upuyvmwv");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/jorgeleandroolaizola/image/upload",
        formData
      )
      .then((response) =>
        setInput({
          ...input,
          image: response.data.secure_url,
        })
      );
  };

  const handleSelect = function (e) {
    let select = e.target.selectedOptions;
    let selected = [];
    for (var i = 0; i < select.length; i++) {
      console.log(select[i].value);
      selected.push(select[i].value);
    }
    selected = selected.map((genre) => parseInt(genre));
    console.log(selected);
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
      <form className="DForm" onSubmit={handleSubmit}>
        <div className="Data">
          <div className="DInput">
            <label className="Label">Name</label>
            <input
              placeholder="Set the name of your game"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
              required
            />
          </div>
          <div className="DInput Description">
            <label className="Label">Description</label>
            <textarea
              placeholder="Place a brief description of your game"
              type="text"
              name="description"
              onChange={handleInputChange}
              value={input.description}
              required
            ></textarea>
          </div>
          <div className="DInput">
            <label className="Label">Released on</label>
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              value={input.date}
              required
            ></input>
          </div>
          <div className="DInput Image">
            <label className="Label">Image</label>
            <input
              type="file"
              name="image"
              onChange={(event) => handleInputImage(event.target.files[0])}
              required
            />
          </div>
          <div className="DInput Rating">
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
          <div className="DInput">
            <label className="Label">Platforms</label>
            <input
              placeholder="Tell us which platforms are available for this game"
              type="text"
              name="platforms"
              onKeyDown={handlePlatforms}
            />
            <div className="ptConteiner">
              {input.platforms &&
                input.platforms.map((p) => (
                  <span className="ptDiv">
                    <span style={{ paddingRight: "10px" }}>
                      {p.platform.name.toUpperCase()}
                    </span>
                    <button
                      className="ptBtn"
                      value={p.platform.name}
                      onClick={(e) => filterPlatform(e)}
                    >
                      X
                    </button>
                  </span>
                ))}
            </div>
          </div>
          <div className="DInput">
            <label className="LabelGenres">Genres</label>
            <span className="Comment">
              *If you wanna select multiple genres, hold ctrl + click
            </span>
            <select multiple size="10" onChange={handleSelect} required>
              {genres &&
                genres.map((g) => <option value={g.id}>{g.name}</option>)}
            </select>
          </div>
        </div>
        <div className="PWPreview">
          {/* Preview */}
          <label>Card preview</label>
          <div className="PWConteiner">
            {input.image ? (
              <img
                src={`${input.image}`}
                alt="Videogame"
                className="PWImg"
              ></img>
            ) : (
              "img"
            )}
            <div className="PWtitle">{input.name}</div>
            <div className="PWinfoCont"></div>
          </div>
        </div>
        <input className="AVSubmit" type="submit" value="Submit game" />
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
