import React from 'react';
import './App.css';
import logo from './octofitapp-small.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="OctoFit Logo" />
          <h1>Welcome to OctoFit Tracker</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Track your fitness activities and compete with your peers!</p>
      </main>
    </div>
  );
}

export default App;
