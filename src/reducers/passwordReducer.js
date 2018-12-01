import { PASSWORD_CHANGE } from '../Actions/types';

const INITIAL_STATE = { password: '' }

export default passwordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload }
        default:
            return state;
    }

}