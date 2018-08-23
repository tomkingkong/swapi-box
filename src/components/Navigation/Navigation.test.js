import React from "react";

import { NavBar } from "./NavBar.js";
import { ContentRoute } from "./ContentRoute.js";

describe("NavBar", () => {
  let navWrapper;
  let getData;
  let activeButton;
  let favorites;

  beforeEach(() => {
    getData = jest.fn()
    activeButton = 'people'
    favorites = []
    navWrapper = shallow(
    <NavBar
      getData={getData}
      activeButton={activeButton}
      favorites={favorites}
    />)
  })
  
  it("should match snapshot with data passed", () => {

    expect(navWrapper).toMatchSnapshot();
  });

  it.skip("should match snapshot without data passed", () => {

    expect(navWrapper).toMatchSnapshot();
  });

  it.skip("should match snapshot with activeButton types", () => {

    expect(navWrapper).toMatchSnapshot();
  });
});

describe("ContentRoute", () => {
  let contentWrapper;
  let toggleFavorites;
  let people;
  let planets;
  let vehicles;
  let favorites;
  let handlePage;

  beforeEach(() => {
    toggleFavorites = jest.fn();
    people = []
    planets = []
    vehicles = []
    favorites = []
    handlePage = jest.fn();
    contentWrapper = shallow(
    <ContentRoute
      toggleFavorites={toggleFavorites}
      people={people}
      planets={planets}
      vehicles={vehicles}
      favorites={favorites}
      handlePage={handlePage}
    />)
  })

  it("should match snapshot with data object passed", () => {
    expect(contentWrapper).toMatchSnapshot();
  });

  it.skip("should match snapshot without data object passed", () => {
    
    expect(contentWrapper).toMatchSnapshot();
  });

});