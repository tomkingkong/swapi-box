import React, { Component } from "react";
import NavBar from "../Navigation/NavBar";
import ContentRoute from "../Navigation/ContentRoute";
import "./App.css";
import { FetchApi, mapThroughArray } from "../Fetch/FetchApi";
import BackgroundScroll from "../BackgroundScroll";

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

<<<<<<< HEAD
  componentDidUpdate() {
    console.log(this.state);
=======
  async componentDidMount() {
    const backgroundScroll = { target: { textContent: "films" } };
    await this.getData(backgroundScroll);
    this.setRandomFilm();
  }

  setRandomFilm = () => {
    const { films } = this.state
    const randomFilmIndex = () => (Math.random()*films.length)+0.5<<0;
    const backgroundFilm = films[randomFilmIndex()];
    this.setState({ backgroundFilm });
>>>>>>> landingpage
  }

  // componentDidMount() {
  //   const backgroundScroll = { target: { textContent: "films" } };
  //   this.getData(backgroundScroll);
  // }

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
<<<<<<< HEAD
    const { films } = this.state;
    const currentFilms = films;

    return (
      <div className="App">
        {currentFilms && <BackgroundScroll films={currentFilms} />}
        <h1>Hope this Works</h1>
=======
    const { people, planets, vehicles, favorites, backgroundFilm } = this.state;
  
    return (
      <div className="App">
        <h1 className="App__TITLE">SWAPI BOX</h1>
       {backgroundFilm && <BackgroundScroll {...backgroundFilm} />}
>>>>>>> landingpage
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