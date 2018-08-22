export const filmScrape = film => {
  const modifiedObj = {
    title: film.title,
    openingCrawl: film.opening_crawl,
    episode: film.episode_id,
    releaseDate: film.release_date,
    favorite: false
  };
  return modifiedObj;
};

export const peopleScrape = (result, species, homeworld) => {
  const modifiedObj = {
    name: result.name,
    species: species.name,
    homeworld: homeworld.name,
    population: homeworld.population,
    favorite: false
  };
  return modifiedObj;
};

export const planetScrape = (result, residents) => {
  const modifiedObj = {
    name: result.name,
    populaton: result.population,
    terrain: result.terrain,
    climate: result.climate,
    residents: residents,
    favorite: false
  };
  return modifiedObj;
};

export const vehicleScrape = vehicle => {
  const modifiedObj = {
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    numberof_passengers: vehicle.passengers
  };
  return modifiedObj;
};


