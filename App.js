

import React from 'react';
import Expo from 'expo';
import {createStackNavigator,DrawerItems,createAppContainer,createDrawerNavigator} from 'react-navigation';
import { SafeAreaView,ScrollView,Dimensions,Text,TextInput,View, StyleSheet,ImageBackground,Image,StatusBar } from 'react-native';

import LoginScreen from './assets/screens/LoginScreen'
import ProfileScreen from './assets/screens/ProfileScreen'
import ForgotPasswordScreen from './assets/screens/ForgotPasswordScreen'

const CustomDrawerComponent=(props)=>(
  <SafeAreaView style={[{flex:1,},styles.navigationPadding]}>
    <View style={{height:150,backgroundColor:'white',alignItems:'center',marginTop: StatusBar.currentHeight}}>
      <Image source={require('./assets/Images/login_background.png')} style={{height:120,width:120,borderRadius:60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const Application = createDrawerNavigator({
  Login: {screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Profile:{screen: ProfileScreen},
  ForgotPassword:{screen: ForgotPasswordScreen,navigationOptions: { header: null}
  },
},
{
    contentComponent:CustomDrawerComponent,
    contentOptions: {
      activeTintColor:'orange'
    }

 });
 const styles = StyleSheet.create({
  navigationPadding: {
    ...Platform.select({
      ios: {
        // pass
      },
      android: {
        paddingTop: Expo.Constants.statusBarHeight,
        height: Expo.Constants.statusBarHeight + 56,
      },
    })
  }
});
export default createAppContainer(Application);
//to start server in www/awsmeproject/login
//nodemon www start
