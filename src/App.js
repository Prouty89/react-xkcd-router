import React, { useState, useEffect } from 'react';
import './App.scss';
import Comic from './components/Comic.js';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <nav>
      <Link to="/">Aboot</Link>
      <Link to="/about">Aboot</Link>
      <Link to="/blag">Aboot</Link>
      </nav>
      <Switch>
        <Route path="/blag">
          <Blag />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/" component={Comic} />
      </Switch>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      I am not Randall Monroe. This is a fake website.
    </div>
  );
};

const Blag = () => {
  return (
    <div>
      <h1>Blag</h1>
      This is a blag entry
    </div>
  );
};

export default App;
