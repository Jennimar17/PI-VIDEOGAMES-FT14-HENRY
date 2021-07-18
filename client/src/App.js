import React from 'react'
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/Home/Home";
import GetAllVideogames from "./components/GetAllVideogames/GetAllVideogames";

import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route path='/home'><Home/></Route>
        <Route exact path='/home'><GetAllVideogames/></Route>
      </React.Fragment>
    </div>
  );
}

export default App;
