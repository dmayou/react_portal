const showPortal = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_PORTAL':
            return !state;
        default:
            return state;
    }
};

export default showPortal;