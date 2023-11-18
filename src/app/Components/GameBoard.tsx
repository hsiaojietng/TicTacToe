import React from 'react'

interface GameBoardProps {
    board: string[][];
    cellClicked: (rowIndex: number, colIndex: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({board, cellClicked}) => {
    return (
        <div id="game_board" className='w-96 h-96'>
          <div className='flex flex-col gap-3 h-full'>
            {board.map((row, rowIndex) => (
              <div className='flex flex-row gap-3 w-full h-full'>
                {row.map((col, colIndex) => (
                  <button className='border-2 border-black w-full' onClick={ () => cellClicked(rowIndex, colIndex)}>
                    <p className=' font-extrabold '>{board[rowIndex][colIndex]}</p>
                  </button>
                ))}
              </div>
              )
            )}
          </div>
        </div>
    )
}

export default GameBoard;