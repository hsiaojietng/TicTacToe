import React from 'react'

interface ResetButtonProps { // Defines the props needed for this component
    resetGame: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({resetGame}) => {
    return (
        <div id='game_resetbutton' className='flex items-center'>
          <button className='flex items-center rounded text-white bg-blue-600 p-3 font-bold hover:bg-white hover:text-blue-600 hover:border-blue-600 active:bg-blue-600' id="resetbutton" onClick={resetGame}>
              Reset game
          </button>
        </div>
    )
}

export default ResetButton;