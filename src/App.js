import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import createAdTract from './components/createAdTract';
import Home from './components/Home';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="routes">
            <Route path="/" exact component={Home} />
            <Route path="/create" component={createAdTract} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
