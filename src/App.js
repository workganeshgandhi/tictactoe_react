import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
   ]);
   const [currentPlayer, setCurrentPlayer] = useState('X'); // initial X and then to change to 0

   const handleClick = (row, col) => {
     if (board[row][col] !== null) return;
     const newBoard = [...board];  // Update clicked cell
     newBoard[row] = [...newBoard[row]];
     newBoard[row][col] = currentPlayer;     
     setBoard(newBoard); // Update board
     setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');  // Change player marked item
   };
 
   return (
     <div className="App">
       <h1>Tic-Tac-Toe</h1>
       <div className="board">
         {board.map((row, rowIndex) => (
           <div key={rowIndex} className="row">
             {row.map((cell, colIndex) => (
               <div
                 key={colIndex}
                 className="cell"
                 onClick={() => handleClick(rowIndex, colIndex)}> 
                 {cell}
               </div> // On click change button value.
             ))}
           </div>
         ))}
       </div>
     </div>
   );
 }
 
 export default App;