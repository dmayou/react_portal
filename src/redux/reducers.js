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
        case 'UNSET_NAME':
            return '';
        default:
            return state;
    }
};

const messages = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REPLY':
            return [...state, action.payload];
        case 'CLEAR_MESSAGES':
            return [];
        case 'DISCONNECT':
            return [...state, '(disconnected)'];
        default:
            return state;
    }
};

const reducers = combineReducers({
    showPortal,
    name,
    messages,
});

export default reducers;