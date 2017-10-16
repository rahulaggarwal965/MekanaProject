import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class Screen1 extends Component {
  static navigationOptions = {
    title: 'Screen3',
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Screen 3</Text>
        <Button
          title='Go to Next Screen'
          onPress={() => navigate('Screen4')}
        />
      </View>
    );
  }
}