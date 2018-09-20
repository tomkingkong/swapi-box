import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export const NavBar = ({ getData, favorites }) => {
  const linkTypes = ['planets', 'people', 'vehicles', 'favorites'];
  const displayNavLinks = linkTypes.map((linkType, i) => {
    return (
      <div className="NAV__BUTTON" key={i}>
        <NavLink 
          className="NAV__LINK"
          name={linkType}
          exact to={`/${linkType}`}
          onClick={getData}
        >
          {linkType} {linkType === 'favorites' ? favorites.length : ''}
        </NavLink>
      </div>);
  });
  return (
    <div className="NAV__BAR">
      {displayNavLinks}
    </div>
  );
};

const { func, array } = PropTypes;

NavBar.propTypes = {
  getData: func,
  favorites: array
};
