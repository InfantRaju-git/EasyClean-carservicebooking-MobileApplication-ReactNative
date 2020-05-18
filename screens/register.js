import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text,KeyboardAvoidingView} from 'react-native';
import Colors from '../constants/Colors';
 
export default class register extends Component {
    static navigationOptions =
     {
        title: 'Sign up',
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: Colors.green_color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
     };
constructor(props) {
    super(props) 
    this.state = {
      uname: '',
      phoneno:'',
      Email: '',
      addr: ''
    }
  }
  UserRegistrationFunction = () =>{
 
 const { uname }  = this.state ;
 const { Email }  = this.state ;
 const { phoneno }  = this.state ;
 const { addr }  = this.state ;
 
fetch('https://bocquiz.000webhostapp.com/signup.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: uname,
    email: Email,
    addr: addr,
    phno: phoneno
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        if(responseJson === 'Registered Successfully')
        {this.props.navigation.navigate('login');}
      }).catch((error) => {
        console.error(error);
      });
      
  }
 
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}>

        <Text style= {{ fontSize: 20, textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
  
        <TextInput
          placeholder="Enter User Name"
          onChangeText={uname => this.setState({uname})}
          underlineColorAndroid='transparent'
          style={styles.input}
        />
 
        <TextInput
          placeholder="Enter User Email"
          onChangeText={Email => this.setState({Email})}
          underlineColorAndroid='transparent'
          style={styles.input}
        />
 
        <TextInput
          placeholder="Enter User Phone Number"
          onChangeText={phoneno => this.setState({phoneno})}
          underlineColorAndroid='transparent'
          style={styles.input}
        />
        <TextInput
          placeholder="Enter User Address"
          multiline={true}
          onChangeText={addr => this.setState({addr})}
          underlineColorAndroid='transparent'
          style={styles.input}
        />
          <View style={styles.myButton}>
            <Text style={styles.text} onPress={this.UserRegistrationFunction}>Sign Up</Text>
          </View>
</View>
</KeyboardAvoidingView>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',  
  },
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: '#ffffff',
 borderRadius: 5 ,
},
input: {
  width: 200,
  height: 40,
  padding: 10,
  borderWidth: 1,
  borderBottomColor:Colors.green_color,
  borderColor: 'black',
  marginBottom: 10,   
  color:Colors.green_color,
  alignSelf:'stretch',
  marginBottom:30,
  borderBottomWidth:1
},
text:{
  color:Colors.green_color,
  },
  myButton:{
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems: 'center',
  },
 
});
 