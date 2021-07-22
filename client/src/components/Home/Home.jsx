import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, resetAll } from "../../actions/index";

export default function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(getAllVideogames());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Link to="/home">
        <h1> DESDE HOME </h1>
      </Link>
      
    </div>
  );
}
