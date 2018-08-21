import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import "./BackgroundScroll.css";

const BackgroundScroll = ({ films }) => {
  const randomFilmIndex = () => (Math.random() * films.length + 0.5) << 0;
  const currentFilm = films[randomFilmIndex()];
  const { episode, openingCrawl, releaseDate, title } = currentFilm;

  return (
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p className="Background_Scroll__EPISODE">Episode {episode}</p>
          <h1 className="Background_Scroll__TITLE">{title}</h1>
        </div>
        <p className="Background_Scroll__TEXT">{openingCrawl}</p>
        <p className="Background_Scroll__DATE">{releaseDate}</p>
      </div>
    </section>
  );
};

BackgroundScroll.propTypes = {
  films: PropTypes.array
};

export default BackgroundScroll;
