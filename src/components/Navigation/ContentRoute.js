import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import PlanetsList from "../PlanetList/PlanetList";
import PeopleList from "../PeopleList/PeopleList";
import VehicleList from "../VehicleList/VehicleList";

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
