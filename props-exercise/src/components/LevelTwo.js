import React from 'react';

import LevelThree from './LevelThree';

function LevelTwo(props) {
  return (
    <LevelThree
      moreProps={props.thirdQuote}
      immaProp={props.firstQuote}
      propsAreFun={props.secondQuote}
    />
  );
}

export default LevelTwo;
