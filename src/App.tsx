import React from 'react';
import Header from './components/Header/Header';
import Displayer from './components/Displayer/Displayer';

function App() {
  return (
    <div id="app">
      <Header />
      <h1 id="mainTitle">🔎 Commit tracker</h1>
      <Displayer />
      <a target="blank" href="https://github.com/felibuscaglia/take-home-test-fulltimeforce"><button id="redirectBtn"><i className="fab fa-github"></i> Access the repository</button></a>
    </div>
  );
}

export default App;
