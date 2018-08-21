import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import Player from "./Player";

const VehicleList = ({ vehicles, markAsFavorite }) => {
  console.log(vehicles[0]);

  return (
    <div>
      <h1>vehicles</h1>
      <button onClick={markAsFavorite}>Favorite</button>
    </div>
  );
};

export default VehicleList;
