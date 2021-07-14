import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUp from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firbase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          console.log(currentUser);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign-in" component={SingInAndSignUp} />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
