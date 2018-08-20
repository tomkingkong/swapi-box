import React, { Component } from "react";
import NavBar from "../Navigation/NavBar";
import ContentRoute from "../Navigation/ContentRoute";
import "./App.css";
import { FetchApi, mapThroughArray } from "./FetchApi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      people: [],
      vehicles: []
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  };

  getData = async event => {
    try {
      let selectedData = event.target.textContent;
      const result = await FetchApi(selectedData);
      // const scrapeData = mapThroughArray(result);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  markAsFavorite = () => {
    console.log("favorited");
  };

  render() {
    return (
      <div className="App">
        <h1>Hope this Works</h1>
        <NavBar getData={this.getData} />
        <ContentRoute
          markAsFavorite={this.markAsFavorite}
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
        />
      </div>
    );
  }
}

export default App;
