import React from "react";
import { Switch, Route } from "react-router-dom";

import { CardContainer } from "../CardContainer";

export default ({ planets, people, vehicles, toggleFavorites, favorites }) => {
  const savedFavorites = favorites.map(favorite => favorite.name);
  return (
    <Switch>
      <Route
        exact
        path="/planets"
        render={() => (
          <CardContainer data={planets} toggleFavorites={toggleFavorites} savedFavorites={savedFavorites}/>
        )}
      />
      <Route
        exact
        path="/people"
        render={() => (
          <CardContainer data={people} toggleFavorites={toggleFavorites} savedFavorites={savedFavorites}/>
        )}
      />
      <Route
        exact
        path="/vehicles"
        render={() => (
          <CardContainer data={vehicles} toggleFavorites={toggleFavorites} savedFavorites={savedFavorites}/>
        )}
      />
      <Route
        exact
        path="/favorites"
        render={() => (
          <CardContainer data={favorites} toggleFavorites={toggleFavorites} savedFavorites={savedFavorites}/>
        )}
      />
    </Switch>
  );
};
