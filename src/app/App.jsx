import React, { Component } from 'react';
import ConnectionStatus from './connection/ConnectionStatus';
import connectionService from './connection/connection.service';
import promo from '../assets/promo.png';
import './app.css';

class App extends Component {
  render() {
    const { status, features } = connectionService;
    
    return (
      <div className="app">
        <title>
          <h1 className="title-message">React PWA</h1>
        </title>

        <main>
          <img className="promo-image" src={promo} alt='' />
          <ConnectionStatus 
            status={status}
            features={features}
          />
        </main>
      </div>
    );
  }
}

export default App;
