import React from "react";
import { connect } from "react-redux";
import Videogames from "../VideoGames/VideoGames";
import Filters from "../Filters/Filters";
import { getAllVideogames, getAllGenres, orderBy } from "../../actions/index";

//Basically, container components are called smart components because each container
//component is connected to Redux and consumes the global data coming from the store.

function GetAllVideogames({ getAllGenres, orderBy, getAllVideogames }) {
  const [change, setChange] = React.useState(true);
  React.useEffect(() => {
    getAllGenres();
    getAllVideogames("");
  }, [getAllGenres, getAllVideogames]);
  React.useEffect(() => {
    return () => {
      setChange(true);
    };
  }, [change]);
  const order = (order) => {
    orderBy(order);
    setChange(false);
  };
  const SearchVideogames = (params) => {
    getAllVideogames(params);
    setChange(false);
  };

  return (
    <div>
      <Filters SearchVideogames={SearchVideogames} order={order} />
      <div>{change && <Videogames />}</div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllGenres: () => dispatch(getAllGenres()),
    orderBy: (order) => dispatch(orderBy(order)),
    getAllVideogames: (q) => dispatch(getAllVideogames(q)),
  };
};

export default connect(null, mapDispatchToProps)(GetAllVideogames);
