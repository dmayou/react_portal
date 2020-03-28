import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Input.css';

function Input(props) {
    const { emitName } = props;
    const [ showButton, changeShowButton ] = useState(true);
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const handleChange = (event) => {
        dispatch({
            type: 'SET_NAME',
            payload: event.target.value
        });
    };
    const handleClick = (event) => {
        emitName(name);
        changeShowButton(false);
    };
    return (
        <div className="Input">
            <label>What's your name?
                <input onChange={handleChange} 
                    value={name} placeholder="name" />
            </label>
                {showButton && 
                    <button onClick={handleClick} 
                        disabled={!name}>Talk with ELIZA
                    </button>}
        </div>
    );
}

export default Input;