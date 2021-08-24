import React from "react";
import { Route, Switch } from "react-router-dom";
import { Characters } from "../../pages/Characters/Characters";
import { Episodes } from "../../pages/Episodes/Episodes";
import { Home } from "../../pages/Home/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route
        exact
        path="/characters"
        render={(props) => <Characters {...props} />}
      />
      <Route
        exact
        path="/episodes"
        render={(props) => <Episodes {...props} />}
      />
    </Switch>
  );
};
