import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const showPortal = useSelector( state => state );
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_PORTAL', payload: null })
  };
  const btnText = showPortal ? 'End Session' : 'Talk with ELIZA';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>ELIZA</code> with React Portals, Hooks and Redux Hooks.
        </p>
        <button onClick={handleClick}>
          {btnText}
        </button>
      </header>
    </div>
  );
}

export default App;
