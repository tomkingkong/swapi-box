import React from "react";
import { Switch, Route } from "react-router-dom";
// import PlanetsList from "../PlanetList/PlanetList";
// import PeopleList from "../PeopleList/PeopleList";
// import VehicleList from "../VehicleList/VehicleList";
import { CardContainer } from "../CardContainer";

export default ({ planets, people, vehicles, favorites }) => {
  return (
    <Switch>
      <Route
        exact
        path="/planets"
        render={() => <CardContainer data={planets} favorites={favorites} />}
      />
      <Route
        exact
        path="/people"
        render={() => <CardContainer data={people} favorites={favorites} />}
      />
      <Route
        exact
        path="/vehicles"
        render={() => <CardContainer data={vehicles} favorites={favorites} />}
      />
    </Switch>
  );
};
