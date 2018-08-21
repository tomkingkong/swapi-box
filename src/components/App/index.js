import React, { Component } from "react";
import NavBar from "../Navigation/NavBar";
import ContentRoute from "../Navigation/ContentRoute";
import "./App.css";
import { FetchApi, mapThroughArray } from "../Fetch/FetchApi";
import BackgroundScroll from '../BackgroundScroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: null,
      backgroundFilm: null,
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
      errorStatus: ''
    };
  }

  async componentDidMount() {
    const backgroundScroll = { target: { textContent: "films" } };
    this.getData(backgroundScroll);
    // console.log(this.state.films);

  }

  getData = async event => {
    try {
      let selectedData = event.target.textContent;
      const result = await FetchApi(selectedData);
      // const scrapeData = mapThroughArray(result);
      this.setState({ [selectedData]: result });
    } catch (error) {
      console.log(error);
    }
  };

  markAsFavorite = () => {
    console.log("favorited");
  };

  render() {
    const { films } = this.state;
  
    return (
      <div className="App">
       {films && <BackgroundScroll films={films} />}
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