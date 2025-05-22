import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
/**
 * Board component renders a 3x3 grid of squares for the TicTacToe game
 * 
 * @param {Object} props - Component props
 * @param {Array} props.squares - Array of 9 elements representing the board state
 * @param {Function} props.onClick - Function to call when a square is clicked
 * @returns {JSX.Element} - Rendered Board component
 */
function Board({ squares, onClick }) {
  // Helper function to render a square with the given index
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  // Render the 3x3 board
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
