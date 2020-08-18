import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Platform,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
 } from 'react-native'

 export default class App extends Component{

  constructor(){
    super();
  }

  render(){
    return(

      <View style={ styles.container } >

        <View style={ styles.logoView } >
          <Image
            source={ require('./images/logo.jpg') }
            style={{ flex:1, width:null, height:null, padding:100 }}
            resizeMode = 'cover'
          ></Image>
        </View>

        <View style={styles.loginView} >

          <View style={styles.InputView} >
             <View style={{padding:20, marginTop:50}}>
              <Text style={{ textAlign:'center', fontSize:20}} > Log in to Facebook </Text>
             </View>
            <TextInput
                autoCapitalize='none'
                placeholder='Email Address or phone number'
                style={styles.textInput}
                maxLength={200}
                multiline={true} >
            </TextInput>
            <TextInput
                autoCapitalize='none'
                placeholder='Password'
                secureTextEntry={true}
                style={styles.textInput} >
            </TextInput>

            <View style={{ marginLeft:20,marginRight:20, padding:5 }} >
              <TouchableHighlight underlayColor='blue' style={{backgroundColor:'#1565C0',alignItems:'center', borderRadius:3}}  onPress={()=>{ alert('Successfully login') }} >
                <Text style={{color:'white', padding:3}} >Login</Text>
              </TouchableHighlight>
              <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row' }} >

                <Text
                  onPress={ ()=>{ alert('Vertify Account') } }
                  style={{padding:10,color:'blue', fontStyle:'normal', textAlign:'center', textDecorationLine:'underline' }} > Forgotten account?
                </Text>

                <Text
                  onPress={ ()=>{ alert('Go to sign up') } }
                  style={{color:'blue', fontStyle:'normal', textAlign:'center', textDecorationLine:'underline', marginLeft:3 }}
                  > Sign up for Facebook
                </Text>

              </View>
              <Text
                onPress={ ()=>{ alert('Back') } }
                style={{color:'blue', textAlign:'center'}} > Not now </Text>
            </View>
          </View>

          <View style={{flex:0.5, alignItems:'center', justifyContent:'flex-end' }} >

            <Text style={{fontStyle:'italic', textDecorationLine:'underline', marginBottom:20}} > Designed by thanh28 </Text>

          </View>

        </View>

      </View>

    )
  }
 }

 const styles = {
   container: {
     flex : 1,
     flexDirection : 'column',
     backgroundColor:'#E1F5FE'
   },
   logoView:{
     flex: 1
   },
   loginView:{
     flex:4,
     justifyContent:'center',
   },
   textInput:{
    marginLeft:20,
    marginRight:20 ,
    borderColor:'gray',
    color:'red',
    borderWidth:1,
    borderRadius:5,
    padding:-5,
    backgroundColor:'white'
   },
   InputView:{
     flex: 2,
     justifyContent:'center',
   }
 }
