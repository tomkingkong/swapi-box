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
    this.setFavoritesFromStorage();
  }

  setRandomFilm = () => {
    const { films } = this.state;
    const randomFilmIndex = () => (Math.random() * films.length + 0.5) << 0;
    const backgroundFilm = films[randomFilmIndex()];
    this.setState({ backgroundFilm });
  };

  getData = async event => {
    let selectedData = event.target.textContent;
    this.buttonPressed(selectedData);
    if (this.state[selectedData] !== null || this.state[selectedData]) return;
    try {
      const result = await FetchApi(selectedData);
      this.setState({ [selectedData]: result });
    } catch (error) {
      this.setState({ errorStatus: error.message });
    }
  };

  buttonPressed = string => {
    this.setState({ activeButton: string });
  };

  toggleFavorites = cardData => {
    const toggleCard = cardData;
    toggleCard.favorite = !toggleCard.favorite;
    this.handleFavorites(toggleCard);
  };

  handleFavorites = cardData => {
    let favorites;
    if (cardData.favorite) {
      favorites = [...this.state.favorites, cardData];
    } else {
      favorites = this.state.favorites.filter(
        card => card.name !== cardData.name
      );
    }
    this.setState({ favorites });
    localStorage.setItem('favorites', JSON.stringify(favorites))
  };

  render() {
    const {
      people,
      planets,
      vehicles,
      favorites,
      backgroundFilm,
      activeButton
    } = this.state;

    return (
      <div className="App">
        <h1 className="App__TITLE">SWAPI BOX</h1>
        {backgroundFilm && <BackgroundScroll {...backgroundFilm} />}
        <NavBar getData={this.getData} pressed={activeButton} />
        <ContentRoute
          toggleFavorites={this.toggleFavorites}
          people={people}
          planets={planets}
          vehicles={vehicles}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default App;
