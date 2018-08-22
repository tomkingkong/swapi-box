import React from "react";
import Reac from "react";
import PropTypes from "prop-types";
import "./CardContainer.css";
import ContentCard from "../ContentCard";

export const CardContainer = ({ data, toggleFavorites }) => {
  console.log(data);
  if (!data) return <section>nada</section>;
  console.log(data);
  const cards = data.map((card, index) => (
    <ContentCard key={index} card={card} toggleFavorites={toggleFavorites} />
  ));

  return <section className="card_container">{cards && cards}</section>;
};
