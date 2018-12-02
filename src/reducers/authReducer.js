import { AUTH_PROCESS } from '../Actions/types';

const INITIAL_STATE = { isAuth: false }

export default passwordReducer = (state = INITIAL_STATE, action) => {
    console.log('AUTH_PROCESS OUT')
    switch (action.type) {
        case AUTH_PROCESS:
        console.log('AUTH_PROCESS INSIDE')
            return { ...state, isAuth: action.payload }
        default:
            return state;
    }
}