import React from 'react';

function PokemonTrainer(props) {
  return (
    <div className="person-wrapper">
      <img src="https://img.icons8.com/color/150/000000/player-female.png" />{' '}
      <p className="person-quote">"{props.quote}"</p>
    </div>
  );
}

export default PokemonTrainer;
