import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import {
  Login,
  Profile,
  Add,
  Topics,
  Progress
} from './screens';

const mainNavigator = TabNavigator({
  Profile: { screen: Profile },
  Add: { screen: Add },
  Topics: { screen: Topics },
  Progress: {screen: Progress},
});

export const Root = StackNavigator({
  Login: { screen: Login },
  Main: { screen: mainNavigator}
}, {
  headerMode: 'none'
});