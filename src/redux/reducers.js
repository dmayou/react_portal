import { combineReducers } from 'redux';

const showPortal = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_PORTAL':
            return !state;
        default:
            return state;
    }
};

const name = (state = '', action) => {
    switch (action.type) {
        case 'SET_NAME':
            return action.payload;
        default:
            return state;
    }
};

const reducers = combineReducers({
    showPortal,
    name,
});

export default reducers;