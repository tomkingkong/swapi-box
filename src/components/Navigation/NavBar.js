import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export const NavBar = ({ getData, activeButton, favorites }) => {

  return (
    <div className="navigation_bar">
      <div className="planets__CONTAINER">
        <NavLink
          name="planets"
          className={
            activeButton === "planets" ? "planets__NAV pressed" : "planets__NAV"
          }
          exact
          to="/planets"
          onClick={getData}
        >
          planets
        </NavLink>
      </div>
      <div className="people__CONTAINER">
        <NavLink
          name="people"
          className={
            activeButton === "people" ? "people__NAV pressed" : "people__NAV"
          }
          to="/people"
          onClick={getData}
        >
          people
        </NavLink>
      </div>
      <div className="vehicles__CONTAINER">
        <NavLink
          name="vehicles"
          className={
            activeButton === "vehicles" ? "vehicles__NAV pressed" : "vehicles__NAV"
          }
          to="/vehicles"
          onClick={getData}
        >
          vehicles
        </NavLink>
      </div>
      <div className="favorites__CONTAINER">
        <NavLink
          className={
            activeButton === "favorites"
              ? "favorites__NAV pressed"
              : "favorites__NAV"
          }
          to="/favorites"
        >
          Favorites: {favorites.length}
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
