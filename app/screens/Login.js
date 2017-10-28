import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
  }
  
  render() {
    const {username, password} = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image 
          style={{width: windowWidth-40, height: (windowWidth-40)*(69.812/538)}} 
          source={require('../resources/MekanaLogo.png')} 
        />

        <TextInput 
          placeholder='Username' 
          style={{height: 40, marginTop: windowHeight/8, width: windowWidth - 40, borderColor: '#CCD8E5', borderWidth: 0.5, borderRadius: 10, padding: 10, }}
          onChangeText={(username) => this.setState({username})}
          value={username} 
        />

        <TextInput 
          secureTextEntry={true} 
          placeholder='Password' 
          style={{height: 40, marginTop: 10, width: windowWidth - 40, borderColor: '#CCD8E5', borderWidth: 0.5, borderRadius: 10, padding: 10, }}
          onChangeText={(password) => this.setState({password})}
          value={password} 
        />

        <TouchableOpacity
          style={{marginTop: windowHeight/12}}
          onPress={() => {
            if(username==='' && password==='')
            {
              navigate('Topics')
            }
          }
          }
        > 

          <Image 
            style={{width: 80, height: 80*(23.137/63.683)}}
            source={require('../resources/MekanaLogin.png')}
          />

        </TouchableOpacity>
      </View>
    );
  }
}