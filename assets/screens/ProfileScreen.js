import React, { Component } from 'react';

import {StatusBar,KeyboardAvoidingView,AsyncStorage,Dimensions, Image,TouchableOpacity, Text, TextInput,View, StyleSheet,ImageBackground,Button } from 'react-native';
import bgImage from '../Images/login_background.png'
import {Header,Left,Right,Icon,Body} from 'native-base'



export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
  
  }
  
  static navigationOptions={
    drawerIcon: ({ tintColor })=>(
      <Icon name="home" style={{fontSize:24,color:tintColor}}/>
    )
  }
 
    render() {
    
      return (
      <View  style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        
         <Header >
           <Left>
         
             <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}>
               
             </Icon> 
           
           </Left>
           <Body />
          <Right />
         </Header>
         <ImageBackground source={bgImage} style={styles.backgroundcontainer}>
        
        </ImageBackground>
      </View>
      
      );
    }
  
  
    
  
  }

  const styles = StyleSheet.create({
    backgroundcontainer: {
        width:null,
        height:null,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center'
       
    },
});