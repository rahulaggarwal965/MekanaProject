import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import TopNavBar from '../components/TopNavBar.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Topics extends Component {
  static navigationOptions = {
    title: 'Topics',
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TopNavBar/>
      </View>
    );
  }
}