import React from 'react';
import { Text, View } from 'react-native';
import { Root } from './app/router';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      //Montserrat (commented out if not in use)
      //'Montserrat-Black': require('./app/fonts/Montserrat/Montserrat-Black.otf'),
      //'Montserrat-Bold': require('./app/fonts/Montserrat/Montserrat-Bold.otf'),
      //'Montserrat-ExtraBold': require('./app/fonts/Montserrat/Montserrat-ExtraBold.otf'),
      //'Montserrat-ExtraLight': require('./app/fonts/Montserrat/Montserrat-ExtraLight.otf'),
      'Montserrat-Light': require('./app/fonts/Montserrat/Montserrat-Light.otf'),
      //'Montserrat-Medium': require('./app/fonts/Montserrat/Montserrat-Medium.otf'),
      //'Montserrat-Regular': require('./app/fonts/Montserrat/Montserrat-Regular.otf'),
      //'Montserrat-SemiBold': require('./app/fonts/Montserrat/Montserrat-SemiBold.otf'),
      //'Montserrat-Thin': require('./app/fonts/Montserrat/Montserrat-Thin.otf'),

      //BebasNeue
      //'BebasNeue Bold' : require('./app/fonts/BebasNeue/BebasNeue Bold.otf'),
      //'BebasNeue Book' : require('./app/fonts/BebasNeue/BebasNeue Book.otf'),
      //'BebasNeue Light' : require('./app/fonts/BebasNeue/BebasNeue Light.otf'),
      //'BebasNeue Regular' : require('./app/fonts/BebasNeue/BebasNeue Regular.otf'),
      //'BebasNeue Thin' : require('./app/fonts/BebasNeue/BebasNeue Thin.otf'),

      //Bebas
      'Bebas' : require('./app/fonts/Bebas/Bebas.ttf'),
    });

    this.setState({ fontLoaded: true });

  }

  render() {
  return <Root screenProps={{fontLoaded: this.state.fontLoaded}}/>;
  }
}