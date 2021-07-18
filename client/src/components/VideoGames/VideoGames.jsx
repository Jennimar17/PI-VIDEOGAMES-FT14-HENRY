import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";

function Videogames({ games }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  var currentCards = games.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Paginate
        cardPerPage={cardPerPage}
        totalCards={games.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {currentCards &&
        currentCards.map((g) => (
          <Card
            key={g.id}
            name={g.name}
            genres={g.genres}
            image={g.image}
            rating={g.rating}
            id={g.id}
          />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, null)(Videogames);
