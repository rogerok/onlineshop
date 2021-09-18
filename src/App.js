import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firbase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";

import CheckoutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import SingInAndSignUp from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";

import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

import "./App.css";

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    /*     addCollectionsAndDocuments(
      "collections",
      collectionsArray.map(({ title, items }) => ({ title, items }))
    );
 */
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
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SingInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
