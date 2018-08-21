import ReactDOM from "react-dom";
import React from 'react'; 
import PropTypes from 'prop-types';
import './BackgroundScroll.css'

const BackgroundScroll = ({episode, openingCrawl, releaseDate, title}) => {
  return (
    <section class="star-wars">
      <div class="crawl">
        <div class="title">
          <p className="Background_Scroll__EPISODE">Episode {episode}</p>
          <h1 className="Background_Scroll__TITLE">{title}</h1>
        </div>
        <p className="Background_Scroll__TEXT">{openingCrawl}</p>
        <p className="Background_Scroll__DATE">{releaseDate}</p>
      </div>
    </section>
  )
}

BackgroundScroll.propTypes = {
  films: PropTypes.array
}

export default BackgroundScroll;