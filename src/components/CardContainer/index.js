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

  if (isFavorites && !data.length) { 
    return (
      <section className="card_container">
        <p className="empty-fav">These are not the favorites you are looking for...</p>
      </section>);
  }
  if (!data) return (
  <section className="card_container loading">
    <img src="https://media2.giphy.com/media/10MKHgkZMDlQ4M/giphy.gif" alt="loading" width="100px" height="100px"/>
  </section>);
  
  const cards = data.map((card, index) => {
    card.favorite = savedFavorites.includes(card.name);
    return (
      <ContentCard key={index} card={card} toggleFavorites={toggleFavorites} />
    );
  });

  return (
    <section className={isFavorites ? "favorites card_container" : "card_container"}>
      <div className="buttons">
        <button className="prev-page-btn" onClick={() => handlePage(false)}>Prev</button>
        <button className="next-page-btn" onClick={() => handlePage(true)}>Next</button>
      </div>
      <div className="center_card_container">{cards && cards}</div>
    </section>
  );
};

const { arrayOf, func, object, string, bool } = PropTypes;

CardContainer.propTypes = {
  data: arrayOf(object),
  savedFavorites: arrayOf(string),
  toggleFavorites: func,
  handlePage: func,
  isFavorites: bool
};
