import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogameDetail } from "../../actions/index";
import "./GetDetail.css";

function GameDetail({ gameDetail, getVideogameDetail, id }) {
  React.useEffect(() => {
    getVideogameDetail(id);
  }, [id, getVideogameDetail]);
  return (
    <div>
      <Link to={`/home`}>
        <button>home</button>
      </Link>

      {gameDetail && (
        <div className="container">
          <p className="principal-title">{gameDetail && gameDetail.name}</p>
          <div className="detail-container">
            <img
              className="img-style"
              src={`${gameDetail.image}`}
              alt="Videogame"
            />

            <div>
              <div>
                <p>Genres</p>
                <p style={{ margin: 0, marginBottom: "10px" }}>
                  {gameDetail.genres &&
                    gameDetail.genres.map((g) => (
                      <p style={{ margin: 0 }}>{g.name}</p>
                    ))}
                </p>
              </div>
              <div>
                <span>Description</span>
                <p>{gameDetail && gameDetail.description}</p>
                <p>
                  This game was released <span>{gameDetail.released}</span>
                </p>
                <p>
                  <span>Rating: </span>
                  {gameDetail && Math.round(gameDetail.rating) >= 1 && "x"}
                  {gameDetail && Math.round(gameDetail.rating) >= 2 && "x"}
                  {gameDetail && Math.round(gameDetail.rating) >= 3 && "x"}
                  {gameDetail && Math.round(gameDetail.rating) >= 4 && "x"}
                  {gameDetail && Math.round(gameDetail.rating) === 5 && "x"}(
                  {" " + gameDetail.rating + " "})
                </p>
                <span>Platforms:</span>{" "}
                <div>
                  {gameDetail.platforms &&
                    gameDetail.platforms.map((p) => (
                      <span>{p.platform.name}</span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetail: state.gameDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideogameDetail: (id) => dispatch(getVideogameDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);
