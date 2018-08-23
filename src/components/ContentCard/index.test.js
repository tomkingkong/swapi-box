import React from "react";

import { ContentCard } from "./index";

describe("ContentCard", () => {
  let wrapper;
  let mockPersonData;
  let mockPlanetData;
  let mockVehicleData;
  let mockToggleFavorites;

  beforeEach(() => {
    mockData = {name: "Luke Skywalker", species: "Human", homeworld: "Tatooine", population: "200000", favorite: false}
    toggleFavorites = jest.fn()

    wrapper = shallow(
    <ContentCard 
      key={0} 
      card={mockData} 
      toggleFavorites={toggleFavorites}
    />);

  })

  it("should match snapshot with data object passed", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot without data object passed", () => {
    mockData = []
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with favorite status true", () => {
    mockData = {name: "Luke Skywalker", species: "Human", homeworld: "Tatooine", population: "200000", favorite: true}
    expect(wrapper).toMatchSnapshot();
  });
});