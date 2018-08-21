import ReactDOM from "react-dom";
import React from 'react'; 
import PropTypes from 'prop-types';
import './BackgroundScroll.css'

const BackgroundScroll = ({ episode, openingCrawl, releaseDate, title }) => {

  return (
    <div className="Background__Container">
    <div className="Background__Fade"></div>
      <section className="Background__Scroll">
        <div className="Background__Crawl">
          <div className="Background__Title">
            <p>Episode {episode}</p>
            <h1>{title}</h1>
        </div>
          <p>{openingCrawl}</p>
          <p>{releaseDate}</p>
      </div>
    </section>
    </div>
  )
}

BackgroundScroll.propTypes = {
  films: PropTypes.array
}

export default BackgroundScroll;