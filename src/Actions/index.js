import {USERNAME_CHANGE,PASSWORD_CHANGE} from './types';

export const changeUsername = (text) => {
    return {
        type:USERNAME_CHANGE,
        payload:text
    }
}

export const changePassword = (text) => {
    return {
        type:PASSWORD_CHANGE,
        payload:text
    }
}

export const authProcess = ({username, password}) => {

}