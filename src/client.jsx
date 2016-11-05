import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Cat from './cats';
import Human from './human';

const catMeow = new Cat('Meowzer').meow();
const harold = new Human('Harold');
const saying = harold.makeNoise();

const App = props => (
  <div>
    The cat says: {props.message}
    {props.hello}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
  hello: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={catMeow} hello={saying} />, document.querySelector('.app'));
