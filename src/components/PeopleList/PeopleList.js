import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ContentCard from "../ContentCard/ContentCard";

const PeopleList = ({ people, markAsFavorite }) => {
  return (
    <div>
      {/* <ContentCard players={players} /> */}
      <button onClick={markAsFavorite}>Favorite</button>
    </div>
  );
};

export default PeopleList;
