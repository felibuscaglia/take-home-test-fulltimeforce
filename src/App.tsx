import React from 'react';
import Header from './components/Header/Header';
import Displayer from './components/Displayer/Displayer';

function App() {
  return (
    <div id="app">
      <Header />
      <h1 id="mainTitle">🔎 Commit tracker</h1>
      <Displayer />
    </div>
  );
}

export default App;
