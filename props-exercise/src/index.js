import React from 'react';
import ReactDOM from 'react-dom';

import LevelOne from './components/LevelOne';
import Instructions from './components/Instructions';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spiderman: "Mr. Stark, I don't feel so good",
      pokemonTrainer: 'Pikachu, I choose you!',
      yoda: 'Learn props, you must.'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>👤 Props Characters 👤</h1>
        <Instructions />
        {/* 
          Okay, so here we are passing our quotes to the LevelOne component.
          If I am trying to follow spiderman's quote on state, I can see here that
          it is being passed to LevelOne as props.quoteThree. So I would go 
          to the LevelOne component, and see where props.quoteThree is being
          used or passed along to another component. Go there now, and let's
          see what we find...
        */}
        <LevelOne
          quoteOne={this.state.pokemonTrainer}
          quoteTwo={this.state.yoda}
          quoteThree={this.state.spiderman}
        />
        <div className="attribution">
          <a href="https://icons8.com/icon/21564/spider-man-head">
            Spider-Man Head icon by Icons8
          </a>
          <a href="https://icons8.com/icon/46221/pokemon-trainer">
            Pokemon Trainer icon by Icons8
          </a>
          <a href="https://icons8.com/icon/68107/yoda">Yoda icon by Icons8</a>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
