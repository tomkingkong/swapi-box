import React from "react";
import PropTypes from "prop-types";
import "./CardContainer.css";
import { ContentCard } from "../ContentCard";

export const CardContainer = ({
  data,
  toggleFavorites,
  savedFavorites,
  handlePage,
  isFavorites
}) => {

if (!data) return <section>{}</section>;
  const cards =  
    data.map((card, index) => {
      card.favorite = savedFavorites.includes(card.name);
      return (
        <ContentCard key={index} card={card} toggleFavorites={toggleFavorites} />
      );
    })

  return (
    <section className="card_container">
      {cards && cards}
      <button
        className="previous-page-button"
        onClick={() => handlePage(false)}
      />
      <button className="next-page-button" onClick={() => handlePage(true)} />
    </section>
  );
};

const { arrayOf, func, object, string } = PropTypes;

CardContainer.propTypes = {
  data: arrayOf(object),
  savedFavorites: arrayOf(string),
  toggleFavorites: func,
  handlePage: func
};
