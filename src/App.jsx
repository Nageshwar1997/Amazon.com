import React from 'react';
import './App.css';
import Header from './homePage/header/Header';
import Home from './homePage/home/Home';


function App() {
  return (
    // BEM
    <div className="app">
      {/* Header */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
