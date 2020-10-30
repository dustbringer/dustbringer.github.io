import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Art from './pages/Art';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress...
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

      {/* <main>
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/art" component={Art} />
            <Route component={Error} />
          </Switch>
        </HashRouter>
      </main> */}
    </div>
  );
}

export default App;
