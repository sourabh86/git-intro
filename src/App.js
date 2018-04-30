import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Git intro</h1>
        </header>
        <p className="App-intro">
          Here's the list of everyone working on this project-
          <ul>
            <li><Link to="/employee/sousoni">Sourabh Soni</Link></li>
          </ul>
          <ul>
            <li><Link to="/employee/kartkv">Karthik K V</Link></li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
