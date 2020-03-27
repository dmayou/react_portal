import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

function App({ dispatch }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => dispatch({ type: 'TEST', payload: null })}>
          Test Redux Dispatch
          </button>
      </header>
    </div>
  );
}

export default connect()(App);
