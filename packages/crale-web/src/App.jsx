import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Web application.
        </p>
        <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
        <div>
          This project includes
          <ul>
            <li>
              Desktop app with electron and react (create-react-app)
            </li>
            <li>
              Standalone web app with react (create-react-app)
            </li>
            <li>
              ES6 Express server based on MongoDB
            </li>
            <li>
              Storybook for component showcase
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
