import React, { Component } from 'react';
import abcHeader from './abc/header.png';
import bbcHeader from './bbc/header.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={abcHeader} alt="ABC Header"/>
          <img src={bbcHeader} alt="BBC Header"/>
        </div>
      </div>
    );
  }
}

export default App;
