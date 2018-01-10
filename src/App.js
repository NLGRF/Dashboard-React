import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Dashboard from 'pages/Dashboard'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
