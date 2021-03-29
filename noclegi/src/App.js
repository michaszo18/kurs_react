import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import SearchBar from './components/UI/SearchBar/SearchBar.js'
import Hotels from './components/Hotels/Hotels.js'
import Spinner from './components/UI/Spinner.js'

class App extends React.Component {

  hotels = [
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
  ];

  state = {
    hotels: [],
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      });
    }, 1000);
  }

  searchHandler(term) {
    console.log(`From app: ${term}`);
    const hotels = [...this.hotels].filter(
      x => (x.name.toLocaleLowerCase()).includes(term.toLocaleLowerCase())
    );
    this.setState({ hotels })

  }

  render() {
    return (
      <div className="App">
        <Header>
          <SearchBar onSearch={term => this.searchHandler(term)}/>
        </Header>
        {this.state.loading ? (
          <Spinner />
        ) : (
            <Hotels hotels={this.state.hotels} />
          )}

      </div>
    );
  }

}

export default App;
