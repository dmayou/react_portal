import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Socket } from 'react-socket-io';
import { useSelector } from 'react-redux';
import './Portal.css';

import Input from './Input';

const uri = 'http://localhost:5000';
const options = { transports: ['websocket'] };

function Portal() {
    const showPortal = useSelector( state => state.showPortal );
    const portalRoot = document.getElementById('portal-root');
    const el = document.createElement('div');
    useEffect(() => {
        if (showPortal) {
            portalRoot.appendChild(el);
            return () => {
                portalRoot.removeChild(el);
            };
        }
    });
    const makeSocketConnection = () => {

    };
    const handleClick = () => {
        const socketConn = makeSocketConnection();
    };
    return ReactDOM.createPortal(
        <div className="Portal">
            <Socket uri={uri} options={options}>
                <Input />
                <button onClick={handleClick}>Talk with ELIZA</button>
            </Socket>
        </div>,
        el,
    );
}

export default Portal;