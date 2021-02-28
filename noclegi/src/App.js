import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js'
import Hotels from './components/Hotels/Hotels.js'

class App extends React.Component {

  state = {
    hotels: [
      {
        id: 1,
        name: "Ritz",
        city: "Paris",
        street: "Paryska",
        rating: 90,
        description: "Hotel Ritz – jedna z najbardziej reprezentacyjnych budowli przedwojennego Białegostoku. Mieścił się w samym centrum miasta, na rogu ulic Niemieckiej i Instytuckiej pod numerem 680a (obecnie ul. Kilińskiego i Pałacowej), pomiędzy pałacem Branickich, a pałacykiem gościnnym.",
        img: ""
      },
      {
        id: 2,
        name: "Hotel Dolina Pilicy",
        city: "Koniecpol",
        street: "Żytnia 11",
        rating: 81,
        description: "To doskonałe miejsce na wypoczynek. Znajduje się w cichym i spokojnym miejscu, niedaleko centrum Koniecpola. Malownicza okolica z sąsiedztwem Rzeki Pilicy i kompleksów zabytkowych obiektów pałacowych i kościelnych, tworzą doskonałe warunki rekreacyjne.",
        img: ""
      }
    ],
  }

  searchHandler(term) {
    console.log(`From app: ${term}`);
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }

}

export default App;
