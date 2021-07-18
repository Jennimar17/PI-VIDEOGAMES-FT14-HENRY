import React from "react";
import { Link } from "react-router-dom";

export default function Videogame(data) {
  return (
    <div>
      {data.image ? (
        <img src={`${data.image}`} alt="Videogame image" className="Img" />
      ) : (
        "IMAGE NOT FOUND"
      )}
      <div>{data.name}</div>
      
      <div>
        <div>
          {data.genres &&
            data.genres.map((g, i) => {
              if (i < 3) {
                return <p>{g.name}</p>;
              }
            })}
        </div>
        <div>{data.rating}</div>
        <div>{data.platforms}</div>
        {data.id && (
          <Link to={`/home/GameDetail/${data.id}`} className="Link">
            <button>Detail</button>
          </Link>
        )}
      </div>
    </div>
  );
}
