import React from "react";

import { ContentCard } from "./index";

describe("ContentCard", () => {
  let wrapper;
  let mockPersonData;
  let mockPlanetData;
  let mockVehicleData;
  let mockToggleFavorites;

  beforeEach(() => {
    mockPersonData = {
      name: "Luke Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      population: "200000",
      favorite: false
    };

    mockPlanetData = {
      climate: "temperate",
      favorite: false,
      name: "Alderaan",
      populaton: "2000000000",
      residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"],
      terrain: "grasslands, mountains"
    };

    mockVehicleData = {
      name: "Sand Crawler",
      model: "Digger Crawler",
      class: "wheeled",
      numberof_passengers: "30",
      favorite: false
    };

    mockToggleFavorites = jest.fn();

    wrapper = shallow(
      <ContentCard
        key={0}
        card={mockPersonData}
        toggleFavorites={mockToggleFavorites}
      />
    );
  });

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