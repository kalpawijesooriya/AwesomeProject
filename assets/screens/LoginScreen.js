import React, { Component } from 'react';

import {StatusBar, AppRegistry,KeyboardAvoidingView, AsyncStorage,ScrollView,Dimensions, Image,TouchableOpacity, Text, TextInput,View, StyleSheet,ImageBackground } from 'react-native';
import bgImage from '../Images/login_background.png'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../Images/icon.png'
token= 'cafc14d111ed6ac0e6991c6d7f6f65ce'
const id='1107689822724816'
const {width:WIDTH}=Dimensions.get('window')
export default class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showPass:true,
      press:false,
      responseJSON: null,
      username:'',
      password:'',
    }
  }
  

 
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ImageBackground source={bgImage} style={styles.backgroundcontainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.Logo}/>
        </View>
        <KeyboardAvoidingView  behavior="padding" >
        <View style={styles.InputContainer}>
          <Icon name={'ios-person'} size={28}  color={'rgba(0,0,0,1.35)'}
          style={styles.InputIcon}/>
          <TextInput
           style={styles.Input}
           placeholder={'Username'}
           placeholderTextColor={'rgba(0,0,0,0.35)'}
           underlineColorAndroid='transparent'
           onChangeText={(username)=>this.setState({username})}
          />
        </View>
        <View behavior="padding"  style={styles.InputContainer}>
          <Icon name={'ios-lock'} size={28}  color={'#000000'}
          style={styles.InputIcon}/>
          <TextInput
             style={styles.Input}
             placeholder={'Password'}
             secureTextEntry={this.state.showPass}
             placeholderTextColor={'rgba(0,0,0,0.35)'}
             underlineColorAndroid='transparent'
             onChangeText={(password)=>this.setState({password})}
          />
          <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press==false?'ios-eye' :'ios-eye-off'} size={26} color={'rgba(0,0,0,0.35)'}/>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.btnLogin} onPress={()=>this.normalLogin()}>
          <Text style={styles.textLogin}>Login</Text>
         </TouchableOpacity>
         {/* <TouchableOpacity style={styles.btnLoginfacebook} onPress={()=>this.login()}>
         <Icon name="logo-facebook" style={styles.iconfb} size={28}  color={'rgba(255,255,255,0.9)'}></Icon>
            <Text style={{ fontSize: 15, textAlign:'center' , color:'rgba(255,255,255,0.9)',}}>Login with Facebook</Text>
         </TouchableOpacity> */}
        <Text style={styles.forgotpassword}   onPress={() => navigate('ForgotPassword')}>Forgot Password</Text>
   </ImageBackground >
        
      );
    }
    normalLogin=()=>{
     
      // fetch('http://172.19.61.149:3000/users',{
      //   method:'POST',
      //   headers:{
      //     'Accept':'application/json',
      //     'Content-Type':'application/json'
      //   },
      //   body:JSON.stringify({
      //      username:this.state.username,
      //      password:this.state.password,
      //   })
      // }).then((response)=>response.json())
      //   .then((res)=>{
          

      //     if(res.success===true){
      //       AsyncStorage.setItem('user',res.user);
            this.props.navigation.navigate('Profile')
        //   }
        //   else{alert(res.message)
        //   }
        // }).done()
    }
    login = async () => {
      const {
        type,
        token,
      } = await Expo.Facebook.logInWithReadPermissionsAsync(id, {
        permissions: ['public_profile', 'email', 'user_friends'],
      });
  
      if (type === 'success') {
        this.callGraph(token);
  
        this.firebaseLogin(token);
      }
    };
    
  showPass=() =>{
    if(this.state.press==false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
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
    },
    Logo:{
     width:120,
     height:120
    },
    logoContainer:{
      alignItems:'center',
      marginBottom:50
    },
    logoText:{
      color:'white',
      fontSize:20,
      fontWeight:'500',
      marginTop:10,
      opacity:0.5
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
    btneye:{
      position:'absolute',
      top:8,
      right:37
    },
    btnLogin:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
     backgroundColor:'#1cb1ac',
     justifyContent:'center',
     marginTop:20
    },
    textLogin:{
      color:'#ffffff',
      fontSize:16,
      textAlign:'center'
    },
    forgotpassword:{
      color:'#1cb1ac',
      fontSize:16,
      textDecorationLine: 'underline',
      marginTop:20,
    },
    btnLoginfacebook:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
     backgroundColor:'#3B5998',
     justifyContent:'center',
     marginTop:20
    },
    iconfb:{
     position:'absolute',
     left:37,
    },
});