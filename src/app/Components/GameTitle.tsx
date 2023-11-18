import React from 'react'

interface GameTitleProps {
    title: string;
}

const GameTitle: React.FC<GameTitleProps> = ({title}) => {
    return (
        <div id='game_title'>
          <h1>{title}</h1>
        </div>
    )
}

export default GameTitle;