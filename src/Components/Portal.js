import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import './Portal.css';
import Input from './Input';
import MessageDisplay from './MessageDisplay';

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
        socket = io();
        socket.on('reply', (reply) => dispatch({ type: 'ADD_REPLY', payload: reply }));
        socket.on('disconnect', () => dispatch({ type: 'DISCONNECT', payload: null }));
        return function() {
            socket = null;
        };
    });
    const emit = (socketEvent) => (msg) => {
        socket.emit(socketEvent, msg);
    };
    return ReactDOM.createPortal(
        <div className="Portal">
            <Input emitName={emit('name')}/>
            <MessageDisplay emitReply={emit('reply')} />
        </div>,
        el,
    );
}

export default Portal;