import React, { Component } from 'react';

import SearchBar from './containers/SearchBar'
import ResultList from './containers/ResultList'
export default class App extends Component {
  render() {
    return (
      <div>
          <div className="row">
              <h2>Search for Songs and Artists</h2>
          </div>
          <SearchBar />
          <ResultList />
      </div>
    );
  }
}
