import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const scaleFactor = 69.812/538;

export default class TopNavBar extends Component {
    render(){
        return (
            <View 
                style={{
                    marginTop:0,
                    width: windowWidth,
                    height: 80,
                    backgroundColor: '#ffffff',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#aaaaaa'
                }}
            > 
                {/* <Image
                style={{width: 40/scaleFactor , height: 40, marginLeft: 5, marginTop: 25}} 
                source={require('../resources/MekanaLogo.png')} 
                /> */}
            </View>
        );
    }
}