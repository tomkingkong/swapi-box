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
  
