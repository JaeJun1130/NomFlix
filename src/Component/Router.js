import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Component/Header";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={TV}></Route>
      <Route path="/serach" exact component={Search}></Route>
      <Route path="/movie/:id" exact component={Detail}></Route>
      <Route path="/show/:id" exact component={Detail}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
