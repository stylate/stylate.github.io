import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import { withRouter, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

/*
ReactGA.initialize('UA-131895892-1');

function trackViews() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
