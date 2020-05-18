import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, View, Alert, Button, Text,Image,Styles} from 'react-native';
import Colors from '../constants/Colors';

export default class login extends Component {

    static navigationOptions =
     {
        title: null,
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: Colors.green_color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
     };
   
  constructor(props) {
      super(props);
      this.state = {phoneno: ''};
      }
    
  
  UserLoginFunction = () =>{
    const {phoneno} = this.state ;

   fetch('https://bocquiz.000webhostapp.com/lote.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       phno: phoneno
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
          if(responseJson === 'Data Matched')
           {
            this.props.navigation.navigate('dashboard',{userphone:this.state.phoneno});
           }
           else{
             Alert.alert(responseJson);
           }
         }).catch((error) => {
           console.error(error);
         });
     }

     render()  {
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
        <Image source={require('../assets/car.png')} />
            <Text style= {styles.TextComponentStyle}>User Login</Text>
            <TextInput
              placeholder="Enter User Phone Number"
              onChangeText={phoneno => this.setState({phoneno})}
              underlineColorAndroid='transparent'
              style={styles.input}
              secureTextEntry={false}
            />
            <View style={styles.myButton}>
            <Text style={styles.text} onPress={ this.UserLoginFunction }>Login</Text>
            </View>
            <Text style={styles.text}>
             {`\nDon't have an account!, click Sign up...`}
            </Text>
            <View style={styles.myButton}>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('signup')}>Sign up</Text>
          </View>
    </View>
    </KeyboardAvoidingView>
        );
      }
    }
      const styles = StyleSheet.create({
       
        TextInputStyleClass: {
         
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
         borderRadius: 5 ,         
        },
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#000000'
        },
         
         TextComponentStyle: {
           fontSize: 20,
          color: "#000",
          textAlign: 'center', 
          marginBottom: 15
         },container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',  
        },
        input: {
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderBottomColor:Colors.green_color,
          borderColor: 'black',
          marginBottom: 10,   
          color:Colors.green_color
         
        },
        titleText: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        myButton:{
          paddingHorizontal:20,
          paddingVertical:15,
          backgroundColor:'black',
        },
        signUpButton:{
          paddingHorizontal:20,
          paddingVertical:15,
          backgroundColor:'black',
          flexGrow:1

        },
        text:{
          color:Colors.green_color,
          
          },
          signupText:{
            flexGrow :1,
            alignItems:'center',
            justifyContent:'center',
            color:Colors.green_color
          }
        });