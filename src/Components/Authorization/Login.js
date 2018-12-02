import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Input, Button, Card, Spinner } from '../ComponentHelpers'
import { connect } from 'react-redux';
import { changeUsername, changePassword, signInUser,showLoader } from '../../Actions';

class Login extends Component {
  constructor(props) {
    super(props);

  }
  onChangeUsername = (text) => {
    this.props.changeUsername(text)
  }

  onChangePassword = (text) => {
    this.props.changePassword(text)
  }

  buttonClickHandler = () => {
    const { username, password } = this.props;
    this.props.signInUser(username, password)
  }

  render() {
    if (this.props.errorMessage) {
      alert(this.props.errorMessage)
    }
    return (
      <View>
        <Card> 
          <CardSection>
          <Input label="Kullanıcı Adı:" placeholder="Adinizi giriniz"
            onChangeText={(text) => this.onChangeUsername(text)} />
        </CardSection>


        <CardSection>
          <Input label="Şifre:"
            placeholder="Şifrenizi giriniz"
            onChangeText={(text) => this.onChangePassword(text)}
            secureTextEntry />
        </CardSection>
        <CardSection>
        {
          !this.props.isLoading ? 
          <Button onPress={(e) => this.buttonClickHandler(e)}>
            Oturum Ac
          </Button>
         : <Spinner size={30} />
        }
        </CardSection>
        </Card>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { username, password, errorMessage, isLoading } = state.isAuth
  return {isLoading, username, password, errorMessage}
}

export default connect(mapStateToProps, { changeUsername, changePassword, signInUser,showLoader })(Login)