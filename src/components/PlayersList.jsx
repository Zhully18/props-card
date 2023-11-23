import React from 'react';
import Player from './Player';
import players from './Players';

const PlayersList = () => (
  <div className='player-card'>
    {players.map((player, index) => (
      <Player key={index} {...player} />
    ))}
  </div>
);

export default PlayersList;
