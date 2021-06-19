import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import Background from './components/Background';
import './App.css';

const SATURATION = 80;
const LIGHTNESS = 80;

const generateColor = (saturation, lightness) => {
  return `hsl(${Math.floor(Math.random() * 20) * 18}, ${saturation}%, ${lightness}%)`;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saturation: SATURATION,
      lightness: LIGHTNESS,
      color: generateColor(SATURATION, LIGHTNESS)
    };
  }

  render() {
    return (
      <div className="App">
        <Background color={this.state.color} />
        <QuoteMachine color={this.state.color} />
      </div>
    );
  }
}

export default App;
