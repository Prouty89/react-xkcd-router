import React, { useState, useEffect } from 'react';
import './App.scss';
import Comic from './components/Comic.js';

function App() {
  return (
    <div className="app">
      <Comic />
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
