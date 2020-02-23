import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Comic from './components/Comic.js';
import axios from 'axios';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blag" component={Blag} />
        <Route path="/:comicNumber?" component={Comic} />
      </Switch>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">comic</Link>
      <Link className="nav-link" to="/about">about</Link>
      <Link className="nav-link" to="/blag">blag</Link>
    </nav>
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
