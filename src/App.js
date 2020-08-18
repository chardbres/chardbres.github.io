import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header'
import Splash from './components/Splash/Splash'
import Quote from './components/Quote/Quote'
import Intro from './components/Intro/Intro'

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <Quote />
      <Intro />
    </div>
  );
}

export default App;
