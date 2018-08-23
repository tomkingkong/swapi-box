import React from "react";

import { CardContainer } from "./index";

describe("CardContainer", () => {
  let wrapper;
  let mockData;
  let toggleFavorites;
  let savedFavorites;
  let handlePage;

  beforeEach(() => {
    mockData = [{name: "Luke Skywalker", species: "Human", homeworld: "Tatooine", population: "200000", favorite: false}]
    toggleFavorites = jest.fn()
    savedFavorites = []
    handlePage = jest.fn()

    wrapper = shallow(
    <CardContainer 
      data={mockData}
      handlePage={handlePage} 
      toggleFavorites={toggleFavorites}
      savedFavorites={savedFavorites}
    />);

  })

  it("should match snapshot with data object passed", () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot without data object passed", () => {
    mockData = []
    expect(wrapper).toMatchSnapshot();
  });
});