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
  console.log(favorites);
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

const { arrayOf, object, func, string, bool, shape } = PropTypes;

ContentRoute.propTypes = {
  planets: arrayOf(
    shape({
      climate: string,
      favorite: bool,
      name: string,
      populaton: string,
      residents: arrayOf(object),
      terrain: string
    })
  ),
  people: arrayOf(
    shape({
      favorite: bool,
      homeworld: string,
      name: string,
      population: string,
      species: string
    })
  ),
  vehicles: arrayOf(
    shape({
      class: string,
      favorite: bool,
      model: string,
      name: string,
      numberof_passengers: string
    })
  ),
  favorites: arrayOf(object),
  handlePage: func,
  toggleFavorites: func
};
