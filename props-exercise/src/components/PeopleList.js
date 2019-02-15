import React from 'react';

import Spiderman from './Spiderman';
import PokemonTrainer from './PokemonTrainer';
import Yoda from './Yoda';

function PeopleList(props) {
  // You've made it! Welcome to the end of your journey. If you have followed
  // your data all the way to here, you can now pass it into the correct character
  // as the quote prop.

  // Hint: remove the string that is currently being passed to quote (including the
  // quote marks) and pass in the correct prop - quote={props.correctProp}
  return (
    <>
      <Spiderman quote="Pass the correct props in so I get my quote!" />
      <PokemonTrainer quote="Pass the correct props in so I get my quote!" />
      <Yoda quote="Pass the correct props in so I get my quote!" />
    </>
  );
}

export default PeopleList;
