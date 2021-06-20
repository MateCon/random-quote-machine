import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import Background from './components/Background';
import './App.scss';

const SATURATION = 60;
const LIGHTNESS = 60;

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
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState(state => ({
      color: generateColor(state.saturation, state.lightness)
    }));
  }

  render() {
    return (
      <div className="App">
        <Background
          color={this.state.color} 
        />
        <QuoteMachine 
          color={this.state.color}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}

export default App;
