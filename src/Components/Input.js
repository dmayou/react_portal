import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Input.css';

function Input(props) {
    const { emitName } = props;
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const handleChange = (event) => {
        dispatch({
            type: 'SET_NAME',
            payload: event.target.value
        });
    };
    const handleClick = (event) => {
        console.log('clicked');
        emitName(name);
    };
    return (
        <div>
        <label>What's your name?
            <input onChange={handleChange} value={name} placeholder="name" />
        </label>
            <button onClick={handleClick}>Talk with ELIZA</button>
        </div>
    );
}

export default Input;