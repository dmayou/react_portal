import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Portal.css';

import io from 'socket.io-client';

import Input from './Input';

function Portal() {
    const uri = 'http://localhost:5000';
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const showPortal = useSelector( state => state.showPortal );
    const portalRoot = document.getElementById('portal-root');
    const el = document.createElement('div');
    let socket = null;

    useEffect(() => {
        if (showPortal) {
            portalRoot.appendChild(el);
            return () => {
                portalRoot.removeChild(el);
            };
        }
    });
    // useEffect(() => {
    //     socket = io(uri);
    //     socket.on('reply', (reply) => dispatch({ type: 'ADD_REPLY', payload: reply }));
    //     socket.on('disconnect', () => dispatch({ type: 'DISCONNECT', payload: null }));
    //     return function() {
    //         socket = null;
    //     };
    // });
    const handleClick = () => {
        console.log('click');
        // socket.emit('name', name);
    };
    return ReactDOM.createPortal(
        <div className="Portal">
            <Input />
            <button onClick={handleClick}>Talk with ELIZA</button>
        </div>,
        el,
    );
}

export default Portal;