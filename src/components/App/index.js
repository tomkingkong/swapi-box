import React, { Component } from "react";
import { NavBar } from "../Navigation/NavBar";
import { ContentRoute } from "../Navigation/ContentRoute";
import { FetchApi } from "../Fetch/FetchApi";
import { BackgroundScroll } from "../BackgroundScroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeButton: "",
      pageCounter: 1,
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
    const backgroundScroll = { target: { name: "films" } };
    await this.getData(backgroundScroll);
    this.setRandomFilm();
    this.setFavoritesFromStorage();
  }

  setRandomFilm = () => {
    const { films } = this.state;
    if (!films) return;
    const randomFilmIndex = () => (Math.random() * films.length + 0.5) << 0;
    const backgroundFilm = films[randomFilmIndex()];
    this.setState({ backgroundFilm });
  };

  getData = async (event, page) => {
    const newPage = page;
    let selectedData = event.target.name;
    this.setButtonPressed(selectedData);
    let alreadyHasData =
      this.state[selectedData] !== null || this.state[selectedData]
        ? true
        : false;
    if (page !== 1) {
      alreadyHasData = false;
    }

    if (alreadyHasData) return;
    try {
      const result = await FetchApi(selectedData, newPage);
      this.setState({ [selectedData]: result });
    } catch (error) {
      this.setState({ errorStatus: error.message });
    }
  };

  setButtonPressed = string => {
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
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  handlePage = async boolean => {
    const { pageCounter, activeButton } = this.state;
    const pageContent = { target: { name: activeButton } };
    let pageCount = pageCounter;
    
    if (boolean && (pageCount === "" || pageCount === 1)) {
      pageCount = 2;
    } else if (!boolean && pageCount === 2) {
      pageCount = "";
    } else if (boolean) {
      pageCount++;
    } else if (!boolean && pageCount >= 1) {
      pageCount--;
    } else {
      return;
    }

    if (boolean && (pageCount === "" || pageCount === 1)) {
      pageCount = 2;
    } else if (!boolean && pageCount === 2) {
      pageCount = "";
    } else if (boolean) {
      pageCount++;
    } else if (!boolean && pageCount >= 1) {
      pageCount--;
    } else {
      return;
    }

    this.setState({ pageCounter: pageCount });
    await this.getData(pageContent, pageCount);
  };

  setFavoritesFromStorage = () => {
    if (localStorage.getItem("favorites")) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      this.setState({ favorites });
    }
    return;
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
        <NavBar
          getData={this.getData}
          pressed={activeButton}
          favorites={favorites}
          activeButton={activeButton}
        />
        <ContentRoute
          toggleFavorites={this.toggleFavorites}
          people={people}
          planets={planets}
          vehicles={vehicles}
          favorites={favorites}
          handlePage={this.handlePage}
        />
      </div>
    );
  }
}

export default App;
