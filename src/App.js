import React, { Component } from 'react';
import Routes from './Routes/routes'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Job applications tracker</h2>
        </div>
       <Routes />
      </div>
    );
  }
}

export default App;
           



