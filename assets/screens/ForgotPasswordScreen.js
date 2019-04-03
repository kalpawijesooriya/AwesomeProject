import React, { Component } from 'react';
import logo from '../Images/icon.png'
import Icon from 'react-native-vector-icons/Ionicons'
import {StatusBar,KeyboardAvoidingView, AsyncStorage,Dimensions, Image,TouchableOpacity, Text, TextInput,View, StyleSheet,ImageBackground } from 'react-native';
import bgImage from '../Images/login_background.png'
const {width:WIDTH}=Dimensions.get('window')
export default class ForgotPasswordScreen extends React.Component {
  constructor(props){
    super(props)
  
  }
  

 
    render() {
      const { height } = Dimensions.get('window');
      return (
        <ImageBackground source={bgImage} style={styles.backgroundcontainer}>
         <View style={styles.logoContainer}>
          <Image source={logo} style={styles.Logo}/>
        </View>
        <Text style={styles.forgotpassword}>Forgot Your Password..?</Text>
        <Text style={styles.discription}>Please enter your email addres. You will receive a link to create a new password via email.</Text>
        <View style={styles.InputContainer}>
          <Icon name={'ios-mail'} size={28}  color={'rgba(0,0,0,1.35)'}
          style={styles.InputIcon}/>
          <TextInput
           style={styles.Input}
           placeholder={'E-mail'}
           placeholderTextColor={'rgba(0,0,0,0.35)'}
           underlineColorAndroid='transparent'
           onChangeText={(username)=>this.setState({username})}
          />
        </View>
        <TouchableOpacity style={styles.btnsubmit} onPress={()=>this.forgotpassword()}>
          <Text style={styles.textsubmit}>Submit</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btnback} onPress={()=>this.forgotpassword()}>
          <Text style={styles.textsubmit}>Back To Login</Text>
         </TouchableOpacity>
        </ImageBackground >
        
      );
    }
  
    forgotpassword=() =>{
      alert('Forgot Password')
     }
    
  
  }

  const styles = StyleSheet.create({
    backgroundcontainer: {
        width:null,
        height:null,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: StatusBar.currentHeight
    },forgotpassword:{
        fontFamily:'prompt',
        fontSize:24,
        color:'#1cb1ac',
        fontWeight: 'bold'
       
        
    },
    logoContainer:{
      marginTop:60,
      marginBottom:50
    },
    Logo:{
      width:120,
      height:120
     },
      discription:{
      fontFamily:'prompt',
      fontSize:16,
      color:'#A8A8A8',
      textAlign: 'center',
      marginLeft:20,
      marginRight:20,
      marginTop:20,
      marginBottom:20
     },
     Input:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
      fontSize:16,
      paddingLeft:45,
      backgroundColor:'rgba(255,255,255,0.9)',
      color:'rgba(0,0,0,0.7)',
      marginHorizontal:25

    },
    InputIcon:{
     position:'absolute',
     top:8,
     left:37

    },
    InputContainer:{
     marginTop:10
    },
    btnsubmit:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
      backgroundColor:'#1cb1ac',
      justifyContent:'center',
      marginTop:20
    },textsubmit:{
      color:'#ffffff',
      fontSize:16,
      textAlign:'center'
    },btnback:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
      backgroundColor:'#A9A9A9',
      justifyContent:'center',
      marginTop:20
    },
   
});