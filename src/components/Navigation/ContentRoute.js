import React from "react";
import { Switch, Route } from "react-router-dom";

import { CardContainer } from "../CardContainer";

export default ({ planets, players, vehicles, markAsFavorite }) => {
  return (
    <Switch>
      <Route
        exact
        path="/planets"
        render={() => (
          <PlanetsList planets={planets} markAsFavorite={markAsFavorite} />
        )}
      />
      <Route
        exact
        path="/players"
        render={() => (
          <PeopleList players={players} markAsFavorite={markAsFavorite} />
        )}
      />
      <Route
        exact
        path="/vehicles"
        render={() => (
          <VehicleList vehicles={vehicles} markAsFavorite={markAsFavorite} />
        )}
      />
    </Switch>
  );
};
