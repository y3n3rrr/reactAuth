import { USERNAME_CHANGE } from '../Actions/types';

const INITIAL_STATE = { username: '' }

export default usernameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGE:
            return { ...state, username: action.payload }
        default:
            return state;
    }

}