import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'



import Main from "./Components/Main/Main";
import MarsRoverPhotos from "./Components/Category/MarsRoverPhotos/MarsRoverPhotos";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Main} exact={true} />
      
      <Route path="/MarsRover" component={MarsRoverPhotos} exact={true}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
