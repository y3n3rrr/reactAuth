import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Login from './Components/Authorization'
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
    componentWillMount(){
        var config = {
            apiKey: "AIzaSyAJrKYryiq8nej_q1SsJXiwfaJLR8dBY3U",
            authDomain: "bilgeadam-bd005.firebaseapp.com",
            databaseURL: "https://bilgeadam-bd005.firebaseio.com",
            projectId: "bilgeadam-bd005",
            storageBucket: "bilgeadam-bd005.appspot.com",
            messagingSenderId: "298302177814"
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={Platform.OS=="ios" ? {paddingTop:20} :{} }>
                    <Login />
                </View>
            </Provider>
        );
    }
}

export default App;
