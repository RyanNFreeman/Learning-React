import React from 'react';

function Instructions(props) {
  return (
    <>
      <h2>Instructions: </h2>
      <p className="instructions-text">
        In the index.js file, you will see three quotes on the state object.
        These quotes are passed down as props through several different
        components. Here are your tasks:
        <br />
        <br />
        • You must follow each quote (each peice of data) through the different
        component layers
        <br />
        <br />
        • In the PeopleList component, pass the correct quote to the correct
        character
        <br />
        <br />
        • For example, follow Yoda's quote down to PeopleList. It will be named
        a lot of different things along it's journey. In PeopleList, if you have
        followed the data, pass that quote to the Yoda component, and it will
        render in the app.
        <br />
        <br />
        • The order of the quotes and the names of the props gets pretty mixed
        up through each component, so make sure you follow them carefully.
        <br />
        <br />
        RULE: Do NOT use the react tools, or console logs to see the value of
        any of these props. We want you to practice following the data through
        the several layers of components
        <br />
      </p>
    </>
  );
}

export default Instructions;
