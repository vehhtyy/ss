import {
    SET_SOCKET
} from '../actions/socket';

export function socket(state = null, action) {
    switch (action.type) {
        case SET_SOCKET:
            return action.socket;
        default:
            return state;
    }
}