import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import { AppStyles } from "./App/AppStyles";

export default () => {
  return (
    <AppStyles>
      <BrowserRouter>
        <Route path="/" component={""} />
        <Switch>
          <Route exact={true} path="/">
            <HomePage />
          </Route>
          <Route exact={true} path="/index.html" component={""} />
          {/* <Route exact={true} path="/bad-url" component={Error400Component} /> */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </AppStyles>
  );
};
