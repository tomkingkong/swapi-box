import React from "react";
import { Switch, Route } from "react-router-dom";

import { CardContainer } from "../CardContainer";

export default ({ planets, people, vehicles, toggleFavorites, favorites }) => {
  return (
    <Switch>
      <Route
        exact
        path="/planets"
        render={() => (
          <CardContainer data={planets} toggleFavorites={toggleFavorites} />
        )}
      />
      <Route
        exact
        path="/people"
        render={() => (
          <CardContainer data={people} toggleFavorites={toggleFavorites} />
        )}
      />
      <Route
        exact
        path="/vehicles"
        render={() => (
          <CardContainer data={vehicles} toggleFavorites={toggleFavorites} />
        )}
      />
    </Switch>
  );
};
