import axios from "axios";
import { filmScrape } from "./DataCleaner";

export const FetchApi = async url => {
  const response = await axios.get(`https://swapi.co/api/${url}/`);
  const { results, next } = response.data;
  return url === "films"
    ? await filmScrape(results)
    : await FetchNextPage(next, results);
};

const FetchNextPage = async (url, prevResults) => {
  let nextUrl = url;
  const response = await axios.get(url);
  const { next, results } = response.data;
  const data = [...prevResults, results];
  if (next) {
    nextUrl = next;
    FetchNextPage(nextUrl, data);
  }
  return data;
};

export const mapThroughArray = data => {
  let mapped = data.forEach();
  const x = [...data];
  // return data.results.map(person => {
  //   return {
  //     name: person.name,
  //     homeworld: person.homeworld.name,
  //     species: person.species[0].name,
  //     population: person.species[0].homeworld.population
  //   };
  // });
  console.log(x);
};

export const fetchScrollText = async film => {
  const response = await axios.get(`https://swapi.co/api/${film}/`);
  console.log(response);
};
