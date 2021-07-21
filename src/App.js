import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firbase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUp from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";

import "./App.css";

function App({ currentUser, setCurrentUser }) {
  /*   const [currentUser, setCurrentUser] = useState();
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SingInAndSignUp />
            }
          />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
