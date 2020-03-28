import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Input.css';

function Input() {
    const dispatch = useDispatch();
    const name = useSelector(state => state);
    const handleChange = (event) => {
        dispatch({
            type: 'SET_NAME',
            payload: event.target.value
        });
    };
    return (
        <label>What's your name?
            <input onChange={handleChange} value={name} placeholder="name" />
        </label>
    );
}

export default Input;