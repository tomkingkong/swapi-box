import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export default ({ getData, pressed }) => {
  const handleData = () => {
    getData();
  };
  return (
    <div className="navigation_bar">
      <div className="planets__CONTAINER">
        <NavLink
          className={
            pressed === "planets" ? "planets__NAV pressed" : "planets__NAV"
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
          className={
            pressed === "people" ? "people__NAV pressed" : "people__NAV"
          }
          to="/people"
          onClick={getData}
        >
          people
        </NavLink>
      </div>
      <div className="vehicles__CONTAINER">
        <NavLink
          className={
            pressed === "vehicles" ? "vehicles__NAV pressed" : "vehicles__NAV"
          }
          to="/vehicles"
          onClick={getData}
        >
          vehicles
        </NavLink>
      </div>
    </div>
  );
};
