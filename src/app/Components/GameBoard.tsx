import React from "react";

interface GameBoardProps {
  board: string[][];
  cellClicked: (rowIndex: number, colIndex: number) => void;
  winner: number | null;
  closeOverlay: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  cellClicked,
  winner,
  closeOverlay,
}) => {
  return (
    <div id="game_board" className="w-96 h-96">
      {winner && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75">
          <p className="text-4xl font-bold text-white p-4">
            Victory to Player {winner}
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded font-bold" onClick={ closeOverlay }>
            Close
          </button>
        </div>
      )}
      <div className="flex flex-col gap-3 h-full">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-3 w-full h-full">
            {row.map((col, colIndex) => (
              <button
                key={colIndex}
                className="border-2 border-black w-full"
                onClick={() => cellClicked(rowIndex, colIndex)}
              >
                <p className="font-extrabold">{board[rowIndex][colIndex]}</p>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
