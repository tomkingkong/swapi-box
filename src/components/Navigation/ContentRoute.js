import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { CardContainer } from "../CardContainer";

export const ContentRoute = ({
  planets,
  people,
  vehicles,
  toggleFavorites,
  favorites,
  handlePage
}) => {
  const savedFavorites = favorites.map(favorite => favorite.name);
  return (
    <Switch>
      <Route
        exact
        path="/planets"
        render={() => (
          <CardContainer
            data={planets}
            handlePage={handlePage}
            toggleFavorites={toggleFavorites}
            savedFavorites={savedFavorites}
          />
        )}
      />
      <Route
        exact
        path="/people"
        render={() => (
          <CardContainer
            data={people}
            handlePage={handlePage}
            toggleFavorites={toggleFavorites}
            savedFavorites={savedFavorites}
          />
        )}
      />
      <Route
        exact
        path="/vehicles"
        render={() => (
          <CardContainer
            data={vehicles}
            handlePage={handlePage}
            toggleFavorites={toggleFavorites}
            savedFavorites={savedFavorites}
          />
        )}
      />
      <Route
        exact
        path="/favorites"
        render={() => (
          <CardContainer
            data={favorites}
            toggleFavorites={toggleFavorites}
            savedFavorites={savedFavorites}
          />
        )}
      />
      <Route
        exact
        path="/next-Page-"
        render={() => (
          <CardContainer data={favorites} toggleFavorites={toggleFavorites} />
        )}
      />
    </Switch>
  );
};

ContentRoute.propTypes = {
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array,
  favorites: PropTypes.array,
  handlePage: PropTypes.func,
  toggleFavorites: PropTypes.func
}