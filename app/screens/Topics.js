import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import TopNavBar from '../components/TopNavBar.js'
import TopicBox from '../components/TopicBox.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Topics extends Component {
  static navigationOptions = {
    title: 'Topics',
  };

  constructor() {
    super();

    this.state = {
        numObjects: 6.
    }
  }

  loadTopics = () => {
    this.setState({
        numObjects: this.state.numObjects * 2,
    })
  }
  
  render() {
    const { navigate } = this.props.navigation;
    const topicArray = ["technology", "science", "artificial intelligence", "chemistry", "biology", "deep learning",];

    return (
      <View>
        <TopNavBar/>
        <FlatList
          data = { topicArray }
          onEndReached = {this.loadTopics}
          initialNumtoRender = {6}
          keyExtractor = {(item, index) => {
            return index;
          }}
          renderItem = {({item}) =>
            <TopicBox
              topicName= {topicArray.index}
              fontLoaded={this.props.navigation.state.params.fontLoaded}
            />
          }
        />
      </View>
    );
  }
}