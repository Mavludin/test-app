import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Characters } from "../../pages/Characters/Characters";
import { Episodes } from "../../pages/Episodes/Episodes";
import { Locations } from "../../pages/Locations/Locations";
import { Quotes } from "../../pages/Quotes/Quotes";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Redirect to="/characters" />} />
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
      <Route
        exact
        path="/locations"
        render={(props) => <Locations {...props} />}
      />
      <Route exact path="/quotes" render={(props) => <Quotes {...props} />} />
    </Switch>
  );
};
