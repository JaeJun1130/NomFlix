import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Serach from "../Routes/Serach";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={TV}></Route>
      <Route path="/serach" exact component={Serach}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
