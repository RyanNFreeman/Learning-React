import React from 'react';

import PeopleList from './PeopleList';

function LevelFour(props) {
  return (
    <PeopleList
      josh={props.harryPotter}
      dustin={props.hermioneGranger}
      luis={props.ronaldWeasley}
    />
  );
}

export default LevelFour;
