import React from 'react';

import LevelTwo from './LevelTwo';

function LevelOne(props) {
  //   Okay, so we are following spiderman's quote from index.js. We know it
  //   was passed to this component as props.quoteThree. Now it's being
  //   passed to LevelTwo as pros.________. Go to LevelTwo and
  //   find it, and see where it's being used/passed on to. Continue
  //   just like that until you get to PeopleList...
  return (
    <LevelTwo
      firstQuote={props.quoteThree}
      secondQuote={props.quoteTwo}
      thirdQuote={props.quoteOne}
    />
  );
}

export default LevelOne;
