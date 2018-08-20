import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const PlanetList = ({ planets, markAsFavorite }) => {
  return (
    <div>
      <h1>planets</h1>
      <button onClick={markAsFavorite}>Favorite</button>
    </div>
  );
};

export default PlanetList;
