import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {gLogin} from './services/firebase'
import Routes from './Routes'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes />
      </div>
    );
  }
}

export default App;
