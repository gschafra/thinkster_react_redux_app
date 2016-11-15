import React, { Component } from 'react';
import store from '../store';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    const onClick = () => store.dispatch({ type: 'TOGGLE' });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>To-dos</h1>
        <div>
          Learn Redux&nbsp;
          <input
            type="checkbox"
            checked={!!this.state.checked} 
            onClick={onClick} />
        </div>
        {
          this.state.checked ? (<h2>Done!</h2>) : null
        }
      </div>
    );
  }
}

export default App;
