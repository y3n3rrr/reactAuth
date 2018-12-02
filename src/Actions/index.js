import {USERNAME_CHANGE,PASSWORD_CHANGE, AUTH_PROCESS, AUTH_FAIL,SHOW_LOADING} from './types';
import firebase from 'firebase';

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

export const signInUser = (username, password) => {
    
    return (dispatch) => {
        showLoader(dispatch, true)
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((response)=> {
            debugger
            showLoader(dispatch, false)
            console.log(response);
            if(response.user){
                dispatch({
                    type:AUTH_PROCESS,
                    payload:true
                });
            }else{
                dispatch({
                    type:AUTH_FAIL,
                    payload:false
                });
            }
            
        })
        .catch((error)=> {
            dispatch({
                type:AUTH_FAIL,
                payload:error.message
            });
            showLoader(dispatch, false)
            console.log(error);
          });
    } 
}



export const showLoader = (dispatch, isLoading) =>{
    //ATTENTION DONT CRETE NEW DISPATCH INSTANCE!!!
    dispatch({
        type:SHOW_LOADING,
        payload:isLoading
    })
}