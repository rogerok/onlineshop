import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return <div className="">HATS PAGE</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
