import React from 'react';
import './App.css';
import MemeGenerator from './Components/MemeGenerator'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
