import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FaRegEye } from "react-icons/fa";

export default function Videogame(data) {
  return (
    <Fragment>
      <div className="card-container">
        <div className="card-container__info">
          <h2 className="card-title">{data.name}</h2>
          {data.genres &&
            data.genres.map((g, i) => {
              if (i < 3) {
                return <span className="card-genres__style"> {g.name} </span>;
              }
            })}
          <p className="card-rating">{data.rating}</p>
        </div>
        {data.image ? (
          <img src={`${data.image}`} alt="Videogame" className="img-style" />
        ) : (
          "IMAGE NOT FOUND"
        )}
        <div className="button-container">
          {data.id && (
            <Link to={`/home/GameDetail/${data.id}`}>
              <FaRegEye>
                <button className="button-style"></button>
              </FaRegEye>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
}
