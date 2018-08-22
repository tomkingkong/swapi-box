import {
  filmScrape,
  peopleScrape,
  planetScrape,
  vehicleScrape
} from "./DataCleaner";

export const FetchApi = async url => {
  const fetchResponse = await fetch(`https://swapi.co/api/${url}/`);
  const response = await fetchResponse.json();
  const { results, next, previous } = response;
  const dataResults = results.map(result => {
    return fetchSpecific(url, result);
  });
  return await Promise.all(dataResults);
};

const fetchSpecific = async (url, result) => {
  let compiledData;
  switch (url) {
    case "films":
      const films = await filmScrape(result);
      compiledData = films;
      break;

    case "people":
      const speciesResult = await fetch(result.species[0]);
      const species = await speciesResult.json();
      const homeworldResult = await fetch(result.homeworld);
      const homeworld = await homeworldResult.json();
      const peopleObj = await peopleScrape(result, species, homeworld);
      compiledData = peopleObj;
      break;

    case "planets":
      const residents = result.residents.map(async residentUrl => {
        const resident = await fetchResidents(residentUrl);
        return resident.name;
      });
      const resolvedResidents = await Promise.all(residents);
      const planetObj = await planetScrape(result, resolvedResidents);
      compiledData = planetObj;
      break;

    case "vehicles":
      const vehicleObj = await vehicleScrape(result);
      compiledData = vehicleObj;
      break;
  }
  return compiledData;
};

const fetchResidents = async url => {
  const response = await fetch(url);
  const resident = await response.json();
  return resident;
};

// const FetchNextPage = async (url, prevResults) => {
//   let nextUrl = url;
//   const response = await axios.get(url);
//   const { next, results } = response.data;
//   const data = [...prevResults, results];
//   if (next) {
//     nextUrl = next;
//     FetchNextPage(nextUrl, data);
//   }
//   return data;
// };
