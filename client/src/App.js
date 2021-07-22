import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import GameDetail from "./components/GetDetail/GetDetail";
import GetAllVideogames from "./components/GetAllVideogames/GetAllVideogames";
import AddVideoGame from "./components/AddVideogame/AddVideogame";

import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home">
          <GetAllVideogames />
        </Route>
        <Route
          path="/home/GameDetail/:id"
          render={({ match }) => <GameDetail id={match.params.id} />}
        />
        <Route path='/home/addVideogame'><AddVideoGame/></Route>
      </React.Fragment>
    </div>
  );
}

export default App;
