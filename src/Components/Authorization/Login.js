import React, { Component } from 'react';
import { View } from 'react-native';
import {CardSection, Input, Button} from '../ComponentHelpers'
import {connect} from 'react-redux';
import {changeUsername, changePassword} from '../../Actions';

class Login extends Component {
  constructor(props) {
    super(props);

  }
  onChangeUsername = (text) => {
    this.props.changeUsername(text)
  }

onChangePassword = (text) =>    {
  this.props.changePassword(text)
}

  buttonClickHandler = () =>    {

  }
  
  render() {
    console.log("RERENDER!!!!!"+this.props.username)
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

const mapStateToProps = (state) => {
  const { username, password } = state;
  return { username, password };
}

export default connect(mapStateToProps, {changeUsername, changePassword})(Login)