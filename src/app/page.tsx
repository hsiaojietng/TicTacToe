'use client'

import { useState, useEffect } from 'react'
import ResetButton from './Components/ResetButton'
import GameMessage from './Components/GameMessage'
import GameBoard from './Components/GameBoard'
import GameTitle from './Components/GameTitle'
import GameTurn from './Components/GameTurn'

export default function Home() {
  const defaultSize = 3;
  const defaultBoard = [["", "", ""], ["", "", ""], ["", "", ""]]
  const defaultMessage = "";
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState(defaultBoard);
  const [message, setMessage] = useState(defaultMessage);
  const [won, setWon] = useState(0);
  const dynamicGameTurnColor = `rounded p-2 font-light ${player === 1 ?
     'bg-red-100' : 'bg-green-100'}`;
  
  function cellClicked(row: number, col: number) {
    if (won) {
      return;
    }

    if (board[row][col] != "") {
      return;
    }

    const updatedBoard = [...board];
    let currVal = "";
    setBoard(updatedBoard);
    if (player == 2) {
      setPlayer(player - 1);
      currVal = "X"
    } else {
      setPlayer(player + 1);
      currVal = "O"
    }
    updatedBoard[row][col] = currVal;

    // Game Logic
    gameWon(currVal, row, col);
    gameFull();
  }

  function gameFull() {
    const allNonEmpty = board.flat().every(item => item != "");
    if (!allNonEmpty) {
      return;
    }

    resetGame();
  }

  function gameWon(currVal: string, row: number, col: number) {
    if (!checkRows(currVal, col) && !checkCols(currVal, row) && !checkRightDiag(currVal) && !checkLeftDiag(currVal)) {
      return;
    }

    setMessage("Player " + player + " won!\nReset for a new game!");
    setWon(1);
  }

  function checkRows(currVal: string, colInd: number) {
    for (let i = 0; i < defaultSize; i ++) {
      if (board[i][colInd] != currVal) {
        return false;
      }
    }
    return true;
  }

  function checkCols(currVal: string, rowInd: number) {
    for (let i = 0; i < defaultSize; i ++) {
      if (board[rowInd][i] != currVal) {
        return false;
      }
    }
    return true;
  }

  /* Diagonal winning can only occur when there exists an X pattern */
  function checkRightDiag(currVal: string) {
    let row = 0;
    let col = 0;
    for (let i = 0; i < defaultSize; i ++) {
      if (board[row][col] != currVal) {
        return false;
      }
      row += 1;
      col += 1;
    }
    return true;
  }

  function checkLeftDiag(currVal: string) {
    let row = 0;
    let col = defaultSize - 1;
    for (let i = 0; i < defaultSize; i ++) {
      if (board[row][col] != currVal) {
        return false;
      }
      row += 1;
      col -= 1;
    }
    return true;
  }

  function resetGame() {
    setBoard(defaultBoard);
    setPlayer(1);
    setMessage("Game resetted!");
    setTimeout(() => {
      setMessage(defaultMessage);
    }, 5000);
    setWon(0);
  }

  return (
    <div>
      <div id='game' className='flex items-center flex-col'>
        <GameTitle title={"Tic Tac Toe Game"}/>
        <GameTurn dynamicGameTurnColor={dynamicGameTurnColor} player={player}/>
        <GameBoard board={board} cellClicked={cellClicked}/>
        <GameMessage message={message}/>
        <ResetButton resetGame={resetGame}/>
      </div>
    </div>
  )
}
