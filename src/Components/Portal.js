import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import './Portal.css';
import Input from './Input';

function Portal() {
    const uri = 'http://localhost:5000';
    const dispatch = useDispatch();
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
    useEffect(() => {
        socket = io(uri);
        socket.on('reply', (reply) => dispatch({ type: 'ADD_REPLY', payload: reply }));
        socket.on('disconnect', () => dispatch({ type: 'DISCONNECT', payload: null }));
        return function() {
            socket = null;
        };
    });
    const emitName = (msg) => {
        socket.emit('name', msg);
    };
    return ReactDOM.createPortal(
        <div className="Portal">
            <Input emitName={emitName}/>
        </div>,
        el,
    );
}

export default Portal;