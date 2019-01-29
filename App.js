

import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './assets/screens/LoginScreen'
import ProfileScreen from './assets/screens/Profile'

const Application = createStackNavigator({
  Login: {screen: LoginScreen,
    navigationOptions: {
      header: null
  }
  },profile:{screen: ProfileScreen}
  
 
});

export default createAppContainer(Application);
//to start server in www/awsmeproject/login
//nodemon www start
