import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { Font } from 'expo';
import App from '../../App.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function hashCode(topic) { 
    let hash = 0;
    for (var i = 0; i < topic.length; i++) {
       hash = topic.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(topicHash){
    let c = (topicHash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

export default class TopicBox extends Component {
    static propTypes = {
        topicName: PropTypes.string.isRequired,
        fontLoaded: PropTypes.bool.isRequired,
    }

    render(){
        return(
            <View
                style={{
                    backgroundColor:  '#' + intToRGB(hashCode(this.props.topicName)),
                    width: windowWidth - 40,
                    height: windowHeight/4,
                    marginLeft: 20,
                    marginTop: 20,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            > 
                { this.props.fontLoaded ? ( <Text
                    style={{
                        color: '#ffffff',
                        fontFamily: 'Bebas',
                        fontSize: 36,
                        letterSpacing: 5,
                    }}
                >
                    {this.props.topicName.toUpperCase()}
                </Text> ) : null }

            </View>
        );
    }
}