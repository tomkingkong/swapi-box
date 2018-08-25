import React from "react";
import { MemoryRouter } from "react-router";
import { shallow, render } from "enzyme";

import { NavBar } from "./NavBar";
import { ContentRoute } from "./ContentRoute";

describe("NavBar", () => {
  let navWrapper;
  let getData;
  let favorites;

  beforeEach(() => {
    getData = jest.fn();
    favorites = [];
    navWrapper = shallow(
      <NavBar
        getData={getData}
        favorites={favorites}
      />
    );
  });

  it("should match snapshot", () => {
    expect(navWrapper).toMatchSnapshot();
  });

  it("should call getData on click", () => {
    const mockGetData = jest.fn();
    navWrapper = shallow(
      <NavBar
        getData={mockGetData}
        favorites={favorites}
      />
    );

    navWrapper
      .find("NavLink")
      .first()
      .simulate("click");
    expect(mockGetData).toHaveBeenCalled();
  });
});

describe("ContentRoute", () => {
  let contentWrapper;
  let toggleFavorites;
  let dataType;
  let people;
  let vehicles;
  let planets;
  let favorites;
  let handlePage;
  let activeButton;

  beforeEach(() => {
    toggleFavorites = jest.fn();
    people = [{}, {}, {}];
    planets = [{}, {}, {}];
    vehicles = [{}, {}, {}];
    favorites = [{}, {}, {}];
    dataType = {people, vehicles, planets, favorites};
    handlePage = jest.fn();
    activeButton = '';
  });
    contentWrapper = shallow(
      <ContentRoute
        toggleFavorites={toggleFavorites}
        people={people}
        planets={planets}
        vehicles={vehicles}
        favorites={favorites}
        handlePage={handlePage}
      />
    );
  });

  it("should match snapshot without data object passed", () => {
    expect(contentWrapper).toMatchSnapshot();
  });

  it("should match snapshot with data object passed", () => {
    expect(contentWrapper).toMatchSnapshot();
  });
});
