import {combineReducers} from 'redux';
import usernameReducer from './usernameReducer'
import passwordReducer from './passwordReducer'
import authReducer from './authReducer'

export default combineReducers({
    username: usernameReducer,
    password: passwordReducer,
    isAuth:authReducer
})