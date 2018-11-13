import React, { Component } from 'react';
import './App.css';
import promo from '../assets/promo.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <title>
          <h1 className="title-message">React PWA</h1>
        </title>

        <main>
          <img className="promo-image" src={promo} alt='' />
        </main>
      </div>
    );
  }
}

export default App;
