import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export default ({ getData }) => {
  return (
    <div>
      <div className="planets-nav">
        <NavLink exact to="/planets" onClick={getData}>
          planets
        </NavLink>
      </div>
      <div className="people">
        <NavLink to="/people" onClick={getData}>
          people
        </NavLink>
      </div>
      <div className="vehicles-nav">
        <NavLink to="/vehicles" onClick={getData}>
          vehicles
        </NavLink>
      </div>
    </div>
  );
};
