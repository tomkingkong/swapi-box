import axios from "axios";

export const FetchApi = async url => {
  const response = await axios.get(`https://swapi.co/api/${url}/`);
  console.log(response);
  const { results, next } = response.data;
  const data = [results];
  const completeList = await FetchNextPage(next, data);
  return completeList;
};

const FetchNextPage = async (url, array) => {
  let nextUrl = url;
  const response = await axios.get(url);
  const { next, results } = response.data;
  const data = [...array, results];
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
