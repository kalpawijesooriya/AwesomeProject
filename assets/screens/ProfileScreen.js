import React from 'react';
import { AppRegistry, ScrollView,Dimensions, Image,TouchableOpacity, Text, TextInput,View, StyleSheet,ImageBackground } from 'react-native';
import bgImage from '../Images/login_background.png'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../Images/icon.png'

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
    
      return (
          <view>
         <Text>Hellow</Text>
          </view>
        
      );
    }
  }