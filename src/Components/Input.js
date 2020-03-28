import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import './Input.css';

function Input() {
    const [name, updateName] = useReducer('');
    return (
        <div>
            <label>What's your name?
                <input placeholder="name" />
            </label>
        </div>
    );
}

export default Input;