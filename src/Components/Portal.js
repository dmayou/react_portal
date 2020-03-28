import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import './Portal.css';

function Portal() {
    const showPortal = useSelector( state => state );
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
        <div className="Portal">Hello World</div>,
        el,
    );
}

export default Portal;