import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import './Portal.css';

import Input from './Input';

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
    return ReactDOM.createPortal(
        <div className="Portal">
            <Input />
            <button>Talk with ELIZA</button>
        </div>,
        el,
    );
}

export default Portal;