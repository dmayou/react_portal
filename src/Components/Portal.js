import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

function Portal({ showPortal }) {
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
        <div style={{backgroundColor: 'pink'}}>Hello World</div>,
        el,
    );
}

const mapStateToProps = (state) => {
    return {
        showPortal: state,
    };
};

export default connect(mapStateToProps)(Portal);