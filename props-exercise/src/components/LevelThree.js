import React from 'react';

import LevelFour from './LevelFour';

function LevelThree(props) {
  return (
    <LevelFour
      harryPotter={props.propsAreFun}
      ronaldWeasley={props.moreProps}
      hermioneGranger={props.immaProp}
    />
  );
}

export default LevelThree;
