import React, { Component } from 'react';
import logo from './pomo-timer.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Best Pomodoro Timer</h2>
        </div>
      </div>
    );
  }
}

export default App;
