import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  AUTH_SUCCESS,
  AUTH_FAIL,
  SHOW_LOADING
} from "./types";
import { Actions } from "react-native-router-flux";
import firebase from "@firebase/app";
import "@firebase/auth";

export const changeUsername = text => {
  return {
    type: USERNAME_CHANGE,
    payload: text
  };
};

export const changePassword = text => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  };
};

export const signInUser = (username, password) => {
  
  return (dispatch) => {
    myDispatcher(dispatch, SHOW_LOADING, true);
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(response => {
        if (response.user){
            myDispatcher(dispatch, AUTH_SUCCESS);
            Actions.Dashboard();
        } else{
            myDispatcher(dispatch, SHOW_LOADING, false);
        }
      })
      .catch(error => {
        myDispatcher(dispatch, AUTH_FAIL, error.message);
        
      });
  };
};

const myDispatcher = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

