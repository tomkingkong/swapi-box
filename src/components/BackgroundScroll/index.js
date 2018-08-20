import React from 'react'; 

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

export default BackgroundScroll;