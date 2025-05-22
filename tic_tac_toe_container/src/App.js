import React from 'react';
import './App.css';
import TicTacToeContainer from './components/TicTacToeContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <TicTacToeContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;