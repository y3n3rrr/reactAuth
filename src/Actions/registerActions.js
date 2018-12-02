import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,CLEAR_ERROR_MESSAGE, SHOW_LOADING } from './types'
import { Actions } from "react-native-router-flux";
import firebase from "@firebase/app";
import "@firebase/auth";


  

export const signUpUser = (username, password) => {
  
    return (dispatch) => {
      myDispatcher(dispatch, SHOW_LOADING, true);
      firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(response => {
            if (response.user) {
                myDispatcher(dispatch, REGISTER_USER_SUCCESS);
                Actions.Dashboard();
            }else{
                myDispatcher(dispatch, SHOW_LOADING, false);
            }
        })
        .catch(error => {
            myDispatcher(dispatch, REGISTER_USER_FAIL, error.message);
        });
    };
  };


  const myDispatcher = (dispatch, type, payload) => {
    dispatch({
      type: type,
      payload: payload
    });
  };

  export const clearErrorMessage = () => {
    return { type:CLEAR_ERROR_MESSAGE }
  };