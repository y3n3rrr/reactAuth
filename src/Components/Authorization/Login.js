import React, { Component } from 'react';
import { View } from 'react-native';
import {CardSection, Input, Button} from '../ComponentHelpers'

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onChangeUsername = (text) =>    {
      console.log(text)
}

onChangePassword = (text) =>    {
    console.log(text)
}

  buttonClickHandler = () =>    {
      this.setState({username:'', password:''})
  }
  render() {
    return (
      <View>
          <CardSection>
            <Input label="Kullanıcı Adı:" placeholder="Adinizi giriniz"
            onChangeText ={(text)=>this.onChangeUsername(text)}/>

          </CardSection>
          <CardSection>
          <Input label="Şifre:" 
          placeholder="Şifrenizi giriniz" 
          onChangeText ={(text)=>this.onChangePassword(text)}
          secureTextEntry/>
          </CardSection>
          <CardSection>
            <Button onPress={(e)=> this.buttonClickHandler(e)}>
                Oturum Ac
            </Button>
          </CardSection>
      </View>
    );
  }
}
