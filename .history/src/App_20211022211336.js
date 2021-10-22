import React from "react";
import { Route, Switch } from "react-router";

import 'rsuite/dist/rsuite.min.css';
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import './styles/main.scss';

function App() {
  return(
    <Switch>
    <Route path="/signin">
      <SignIn/>
    </Route>
    <PrivateRoute path="/">
      <Home/>
    </PrivateRoute>
    </Switch>
  );
}

export default App;
