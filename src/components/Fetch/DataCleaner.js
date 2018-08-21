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

export const peopleScrape = (result, species, homeworld) => {
  const modifiedObj = {
    name: result.name,
    species: species.name,
    homeworld: homeworld.name,
    population: homeworld.population
  };
  return modifiedObj;
};

export const planetScrape = (result, residents) => {
  const modifiedObj = {
    name: result.name,
    populaton: result.population,
    terrain: result.terrain,
    climate: result.climate,
    residents: residents
  };
  return modifiedObj;
};

export const vehicleScrape = result => {
  const modifiedObj = {
    name: result.name,
    model: result.model,
    class: result.vehicle_class,
    numberof_passengers: result.passengers
  };
  return modifiedObj;
};
