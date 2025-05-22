import React, { useState } from 'react';
import Board from './Board';
import './TicTacToe.css';

// PUBLIC_INTERFACE
/**
 * TicTacToeContainer is the main container component for the TicTacToe game.
 * It manages game state, player turns, win detection, and game reset functionality.
 * 
 * @returns {JSX.Element} - Rendered TicTacToeContainer component
 */
function TicTacToeContainer() {
  // State to track the game board - array of 9 elements (null, 'X', or 'O')
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // State to track which player's turn it is (true for 'X', false for 'O')
  const [xIsNext, setXIsNext] = useState(true);
  
  // Calculate the game status - who won or whose turn it is
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  // Handle click on a square
  const handleClick = (i) => {
    // Create a copy of the squares array
    const newSquares = squares.slice();
    
    // If there's a winner or the square is already filled, ignore the click
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    
    // Set the square to X or O depending on whose turn it is
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    // Update the state
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Reset the game to initial state
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <div className="game-title">Tic Tac Toe Classic</div>
      <div className="game-status">{status}</div>
      <div className="game-board">
        <Board 
          squares={squares}
          onClick={handleClick}
        />
      </div>
      <button className="reset-button btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

/**
 * Calculate the winner of the game by checking all possible winning combinations
 * 
 * @param {Array} squares - The current state of the game board
 * @returns {string|null} - 'X', 'O', or null if there's no winner
 */
function calculateWinner(squares) {
  // All possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three squares have the same non-null value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  // No winner found
  return null;
}

export default TicTacToeContainer;
