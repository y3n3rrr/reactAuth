import {combineReducers} from 'redux';
import authReducer from './authReducer'
import genericReducer from './genericReducer'

export default combineReducers({
    isAuth:authReducer
    //isLoading:genericReducer
});