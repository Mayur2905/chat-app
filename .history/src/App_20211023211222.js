import React from "react";
import {Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import 'rsuite/dist/rsuite';
import './styles/main.scss';

function App() {
  return(
    <Switch>
    <PublicRoute path="/signin">
      <SignIn/>
    </PublicRoute>
    <PrivateRoute path="/">
      <Home/>
    </PrivateRoute>
    </Switch>
  );
}

export default App;
