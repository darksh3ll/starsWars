import React, { Component } from 'react';
import './App.css';
import './components/SearchBox'
import SearchBox from "./components/SearchBox";



class App extends Component {
    render() {
    return (
      <div className="App">
          <h1>STARS WARS API</h1>
        <SearchBox/>

      </div>
    );
  }
}

export default App;
