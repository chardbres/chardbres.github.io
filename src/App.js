import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.jsx'
import Splash from './components/Splash/Splash.jsx'
import Intro from './components/Intro/Intro.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <Intro />
    </div>
  );
}

export default App;
