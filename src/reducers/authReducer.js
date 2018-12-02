import { USERNAME_CHANGE, PASSWORD_CHANGE, AUTH_SUCCESS, AUTH_FAIL,SHOW_LOADING } from '../Actions/types';
const INITIAL_STATE = {username:'', password:'', isAuth: false, errorMessage:'', isLoading:false }

export default authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGE:
            return { ...state, username: action.payload, errorMessage:'' }
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload, errorMessage:'' }
        case AUTH_SUCCESS:
            return { ...state, isAuth: true, errorMessage:'', isLoading:false }
        case AUTH_FAIL:
            return { ...state, isAuth: false, errorMessage: action.payload, isLoading:false }
        case SHOW_LOADING:
            return { ...state, isLoading: action.payload  }
        default:
            return state;
    }
}