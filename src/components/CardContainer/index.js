import React from "react";
import Reac from "react";
import PropTypes from "prop-types";
import "./CardContainer.css";
import ContentCard from "../ContentCard";

export const CardContainer = ({ data }) => {
  if (!data) return <section>nada</section>;
  console.log(data);
  const cards = data.map(card => <ContentCard card={card} />);

  return <section className="card_container">{cards && cards}</section>;
};
