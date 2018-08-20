export const filmScrape = data => {
  return data.map(film => {
    const modifiedObj = {
      title: film.title,
      openingCrawl: film.opening_crawl,
      episode: film.episode_id,
      releaseDate: film.release_date
    };
    return modifiedObj;
  });
};
