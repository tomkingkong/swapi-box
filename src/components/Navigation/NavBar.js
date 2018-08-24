import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export const NavBar = ({ getData, favorites }) => {
  const linkTypes = ['planets', 'people', 'vehicles', 'favorites'];
  return (
    <div className="navigation_bar">
      <div className="CONTAINER">
        <NavLink
          className="NAV"
          name="planets"
          exact
          to="/planets"
          onClick={getData}
        >
          planets
        </NavLink>
      </div>
      <div className="CONTAINER">
        <NavLink
          className="NAV"
          name="people"
          to="/people"
          onClick={getData}
        >
          people
        </NavLink>
      </div>
      <div className="CONTAINER">
        <NavLink
          className="NAV"
          name="vehicles"
          to="/vehicles"
          onClick={getData}
        >
          vehicles
        </NavLink>
      </div>
      <div className="CONTAINER">
        <NavLink
          className="NAV"
          to="/favorites"
        >
          favorites {favorites.length}
        </NavLink>
      </div>
    </div>
  );
};

const { func, string, shape, arrayOf, bool } = PropTypes;

NavBar.propTypes = {
  getData: func,
  pressed: string,
  favorites: arrayOf(
    shape({
      class: string,
      favorite: bool,
      model: string,
      name: string,
      numberof_passengers: string
    })
  )
};
