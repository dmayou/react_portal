import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

function App(props) {
  const { dispatch, showPortal } = props;
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_PORTAL', payload: null })
  };
  const btnText = showPortal ? 'Close Portal' : 'Open Portal';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>
          {btnText}
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showPortal: state,
  };
};

export default connect(mapStateToProps)(App);
