import React from 'react';
import QuoteMachine from './components/QuoteMachine';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <QuoteMachine />
    </div>
  );
}

export default App;
