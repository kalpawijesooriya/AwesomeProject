import React, { Component } from 'react';
import { AppRegistry, ScrollView,Dimensions, Image,TouchableOpacity, Text, TextInput,View, StyleSheet,ImageBackground } from 'react-native';
import bgImage from './Images/login_background.png'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from './Images/logo.png'
import expo from 'expo'


 token= 'cafc14d111ed6ac0e6991c6d7f6f65ce'
const id='1107689822724816'
const {width:WIDTH}=Dimensions.get('window')


export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  constructor(){
    super()
    this.state={
      showPass:true,
      press:false,
      responseJSON: null,
    }
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
  render() {
 
      return (
      
        <ImageBackground source={bgImage} style={styles.backgroundcontainer}>
           <View style={styles.logoContainer}>
             <Image source={logo} style={styles.Logo}/>
             <Text style={styles.logoText}>Awesome App</Text>
           </View>
           <View style={styles.InputContainer}>
             <Icon name={'ios-person'} size={28}  color={'rgba(255,255,255,0.7)'}
             style={styles.InputIcon}/>
             <TextInput
              style={styles.Input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
             />
           </View>
           <View style={styles.InputContainer}>
             <Icon name={'ios-lock'} size={28}  color={'rgba(255,255,255,0.7)'}
             style={styles.InputIcon}/>
             <TextInput
                style={styles.Input}
                placeholder={'Password'}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
             />
             <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
               <Icon name={this.state.press==false?'ios-eye' :'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'}/>
             </TouchableOpacity>
           </View>
           <TouchableOpacity style={styles.btnLogin}>
             <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLoginfacebook} onPress={()=>this.login()}>
            <Icon name="logo-facebook" style={styles.iconfb} size={28}  color={'rgba(255,255,255,0.7)'}></Icon>
               <Text style={{ fontSize: 15, textAlign:'center' , color:'rgba(255,255,255,0.7)',}}>Login with Facebook</Text>
            </TouchableOpacity>
           
      </ImageBackground >

    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
  const styles = StyleSheet.create({
    backgroundcontainer: {
        width:null,
        height:null,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       
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
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
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
     backgroundColor:'#432577',
     justifyContent:'center',
     marginTop:20
    },
    textLogin:{
      color:'rgba(255,255,255,0.7)',
      fontSize:16,
      textAlign:'center'
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

