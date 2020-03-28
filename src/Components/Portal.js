import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Portal(props) {
    const portalRoot = document.getElementById('portal-root');
    const el = document.createElement('div');
    useEffect(() => {
        portalRoot.appendChild(el);
        return () => {
            portalRoot.removeChild(el);
        };
    });
    return ReactDOM.createPortal(
        <div style={{backgroundColor: 'pink'}}>Hello World</div>,
        el,
    );
}

export default Portal;