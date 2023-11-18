import React from 'react'

interface GameTurnProps {
    dynamicGameTurnColor: string;
    player: number;
}

const GameTurn: React.FC<GameTurnProps> = ({dynamicGameTurnColor, player}) => {
    return (
        <div id='game_turn' className='flex p-3'>
          <p className={dynamicGameTurnColor}>Player {player}'s turn</p>
        </div>
    )
}

export default GameTurn;