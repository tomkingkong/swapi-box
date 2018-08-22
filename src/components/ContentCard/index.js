import React from "react";
import PropTypes from "prop-types";
import "./ContentCard.css";
// import Button from './Button'

const ContentCard = ({ card, toggleFavorites }) => {
  const content = Object.keys(card).map((key, index) => {
    return key === "name" ? (
      <h1 key={key + index}>{card[key]}</h1>
    ) : (
      <p>
        {key}: {card[key]}
      </p>
    );
  });
  return (
    <article className="content_card">
      {content}
      <button>Favorite</button>{" "}
    </article>
  );
};

export default ContentCard;
