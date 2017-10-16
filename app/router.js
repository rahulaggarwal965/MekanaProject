import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
} from './screens';

export const Root = TabNavigator({
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
  Screen4: { screen: Screen4 },
}, {
  animationEnabled: true,
  tabBarOptions: {
    style: {
      paddingBottom: 20,
    },
  },
});