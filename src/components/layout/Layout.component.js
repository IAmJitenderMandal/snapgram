import React, { useContext } from "react";
import "./layout.styles.scss";
import SignIn from "../sign-in/SignIn.component";
import SignUp from "../sign-up/SignUp.component";
import Home from "../home/Home.component";
import { Route, Switch, Redirect } from "react-router-dom";
import AppContext from "../../context/appContext";

export default function Layout() {
  let [state] = useContext(AppContext);
  let { user } = state;

  return (
    <div className="layout">
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/sign_up">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
