import React, { Component } from 'react';
import './App.css';
import Messages  from './messages/Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chatterbx</h1>
        </header>
        <div className="App-main">
          <Messages />
        </div>
      </div>
    );
  }
}

export default App;
