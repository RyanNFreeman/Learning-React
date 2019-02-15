import React from 'react';

function Yoda(props) {
  return (
    <div className="person-wrapper">
      <img src="https://img.icons8.com/color/150/000000/yoda.png" />{' '}
      <p className="person-quote">"{props.quote}"</p>
    </div>
  );
}

export default Yoda;
