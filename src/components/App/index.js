import React, { Component } from "react";
import NavBar from "../Navigation/NavBar";
import ContentRoute from "../Navigation/ContentRoute";
import "./App.css";
import { FetchApi } from "../Fetch/FetchApi";
import BackgroundScroll from "../BackgroundScroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeButton: "",
      films: null,
      backgroundFilm: null,
      planets: null,
      people: null,
      vehicles: null,
      favorites: [],
      errorStatus: ""
    };
  }

  async componentDidMount() {
    const backgroundScroll = { target: { textContent: "films" } };
    await this.getData(backgroundScroll);
    this.setRandomFilm();
  }

  setRandomFilm = () => {
    const { films } = this.state;
    const randomFilmIndex = () => (Math.random() * films.length + 0.5) << 0;
    const backgroundFilm = films[randomFilmIndex()];
    this.setState({ backgroundFilm });
  };

  getData = async event => {
    try {
      let selectedData = event.target.textContent;
      const result = await FetchApi(selectedData);
      this.setState({ [selectedData]: result });
    } catch (error) {
      this.setState({ errorStatus: error.message })
    }
  };

  markAsFavorite = () => {
    console.log("favorited");
  };

  render() {
    const { people, planets, vehicles, favorites, backgroundFilm } = this.state;

    return (
      <div className="App">
        <h1 className="App__TITLE">SWAPI BOX</h1>
        {backgroundFilm && <BackgroundScroll {...backgroundFilm} />}
        <NavBar getData={this.getData} />
        <ContentRoute
          favorites={favorites}
          people={people}
          planets={planets}
          vehicles={vehicles}
        />
      </div>
    );
  }
}

export default App;
