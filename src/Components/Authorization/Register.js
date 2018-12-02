import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection, Input, Button, Card, Spinner } from "../ComponentHelpers";
import { connect } from "react-redux";
import {
  signUpUser,
  showLoader,
  changeUsername,
  changePassword
} from "../../Actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      passwordRepeat: ""
    }
    this.compData = {
      ErrorMessageP: "",
      ErrorMessagePR: ""
    };
  }

  buttonClickHandler = () => {
    const { username, password } = this.props;
    this.props.signUpUser(username, password);
    this.setState({isReady: true})
  };

  handlePasswordTextChange = value => {
    if (value && this.props.passwordRepeat !== value) {
      this.compData.ErrorMessageP = "Girilen sifreler uyusmuyor";
      this.compData.ErrorMessagePR = "";
    } else {
      this.compData.ErrorMessagePR = "";
      this.compData.ErrorMessageP = "";
    }
    this.props.changePassword(value);
  }

  handlePasswordRepeatTextChange = value => {
    debugger
    if (value && this.props.password !== value) {
      this.compData.ErrorMessagePR = "Girilen sifreler uyusmuyor";
      this.compData.ErrorMessageP = "";
    } else {
      this.compData.ErrorMessagePR = "";
      this.compData.ErrorMessageP = "";
    }
    this.setState({passwordRepeat:value, isReady: false});
  }

  handleUsernameTextChange = value => {
    this.props.changeUsername(value);
    this.compData.ErrorMessagePR = "";
    this.compData.ErrorMessageP = "";
  };

  render() {
    if (this.props.errorMessage && this.state.isReady) {
      alert(this.props.errorMessage);
    }
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Kullanıcı Adı:"
              placeholder="Adinizi giriniz"
              onChangeText={e => this.handleUsernameTextChange(e)}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Şifre:"
              placeholder="Şifrenizi giriniz"
              secureTextEntry
              onChangeText={e => this.handlePasswordTextChange(e)}
            />
            {this.compData.ErrorMessageP != "" && (
              <View>
                <Text> {this.compData.ErrorMessageP} </Text>
              </View>
            )}
          </CardSection>

          <CardSection>
            <Input
              label="Şifre Tekrar:"
              placeholder="Şifrenizi tekrar giriniz"
              secureTextEntry
              onChangeText={e => this.handlePasswordRepeatTextChange(e)}
            />
            {this.compData.ErrorMessagePR != "" && (
              <View>
                <Text>{this.compData.ErrorMessagePR}</Text>
              </View>
            )}
          </CardSection>

          <CardSection>
            {!this.props.isLoading ? (
              <Button onPress={e => this.buttonClickHandler(e)}>
                KAYIT OL
              </Button>
            ) : (
              <Spinner size={30} />
            )}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  debugger
  const { username, password, errorMessage, isLoading } = state.isAuth;
  return { isLoading, username, password, errorMessage };
};

export default connect(
  mapStateToProps,
  { changeUsername, changePassword, signUpUser, showLoader }
)(Register);
