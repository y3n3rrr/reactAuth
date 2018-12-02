import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../ComponentHelpers';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  navigateLogin(){
    Actions.Login()
  }
  navigateRegister(){
    Actions.Register()
  }
  render() {
    return (
      <View>
        <View style={{justifyContent:'center', alignItems:'center', padding:15, fontWeight: 'bold',}}>
          <Text> Bilge Adam Test Sample! </Text>
        </View>
        
        <View style={{flexDirection: 'row' }}>
          <Button onPress={() => { this.navigateLogin() }}>
            Login
          </Button>
          <Button onPress={() => { this.navigateRegister() }}>
            Register
          </Button>
        </View>
      </View>
    );
  }
}
