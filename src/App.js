import React, { Component } from 'react';
import Routes from './Routes/routes'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           
          <h2>Job applications tracker</h2>
        </div>
        <p className="App-intro">
    <Routes />
        </p>
      </div>
    );
  }
}

export default App;


//img src={logo} className="App-logo" alt="logo" />