import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Login from './Components/Authorization'

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(()=> {return []})}>
                <Login />
            </Provider>
        );
    }
}