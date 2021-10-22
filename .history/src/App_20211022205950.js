import React from "react";
import { Route, Switch } from "react-router";

import 'rsuite/dist/rsuite.min.css';
import SignIn from "./pages/Signin";
import './styles/main.scss';

function App() {
  return(
    <Switch>
    <Route>
      <SignIn/>
    </Route>
    </Switch>
  )
}

export default App;
