import {FETCH_VIDEO} from '../actions/types';

export default (state=[],action) => {
    switch(action.type) {
        case FETCH_VIDEO:
        return action.payload || false;
        default:
        return state;
    }
}
