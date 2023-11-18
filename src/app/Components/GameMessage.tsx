import React from 'react'

interface GameMessageProps {
    message: string;
}

const GameMessage: React.FC<GameMessageProps> = ({message}) => {
    return (
        <div id="game_message" className='p-4 flex items-center'>
          <p>{message}</p>
        </div>
    )
}

export default GameMessage;