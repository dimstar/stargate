import React, { Component } from 'react';
import Stargate from './Stargate';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Stargate></Stargate>
        <main><h1 className="site-brand">kyle magee</h1>
        </main>
      </>
    );
  }
}

export default App;
