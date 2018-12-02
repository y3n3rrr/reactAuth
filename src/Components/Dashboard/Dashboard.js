import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Welcome, { this.props.username } </Text>
      </View>
    );
  }
}
const MapStateToProps = state =>{
    const {username} = state.isAuth;
    return { username };
}

export default connect(MapStateToProps)(Dashboard)