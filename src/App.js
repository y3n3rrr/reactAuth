import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Login from './Components/Authorization'
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBSc8pUb6Yd9mLcnA5B9tVtm558865lNM",
    authDomain: "testtt-6551d.firebaseapp.com",
    databaseURL: "https://testtt-6551d.firebaseio.com",
    projectId: "testtt-6551d",
    storageBucket: "testtt-6551d.appspot.com",
    messagingSenderId: "305167887357"
  };
  firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={Platform.OS=="ios" ? {paddingTop:20} :{} }>
                    <Login />
                </View>
            </Provider>
        );
    }
}

export default App;
