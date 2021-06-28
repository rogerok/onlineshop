import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
