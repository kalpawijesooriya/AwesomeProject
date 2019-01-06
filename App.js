

import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './assets/screens/LoginScreen'
import ProfileScreen from './assets/screens/ProfileScreen'

const Application = createStackNavigator({
  Login: {screen: LoginScreen}
 
});

export default createAppContainer(Application);