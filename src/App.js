import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAdtract from './components/CreateAdtract';
import Home from './components/Home';
import Listing from './components/AdtractListing';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="routes">
            <Route path="/" exact component={Home} />
            <Route path="/create" component={CreateAdtract} />
            <Route path="/listing" component={Listing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
