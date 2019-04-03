/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "5boaazZuSwAqjoPrPy"
    };

    this.search("homer");
  }

  updateSelected = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy('ey1WpE92d0QwOtO3Q6xRBxdPAz2nNmt3').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFunction={this.updateSelected} />
        </div>
      </div>
    );
  }
}

export default App;
