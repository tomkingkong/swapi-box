import React from "react";
import Reac from "react";
import PropTypes from "prop-types";
import "./CardContainer.css";
import ContentCard from "../ContentCard";

export const CardContainer = ({ data, toggleFavorites, savedFavorites }) => {
  if (!data) return <section>nada</section>;
  const cards = data.map((card, index) => {
    card.favorite = savedFavorites.includes(card.name);
    return <ContentCard key={index} card={card} toggleFavorites={toggleFavorites} />
  });

  return <section className="card_container"> {cards && cards}</section>;
};
