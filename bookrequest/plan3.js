import React, { Component } from 'react';
import { AppRegistry, Text,Button,Picker,View,StyleSheet,Alert } from 'react-native';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';


export default class dashboard extends Component {
    static navigationOptions = {
        title: 'Plan 3 Booking',
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
        this.state = {
          un: this.props.navigation.state.params.un,
          phno:this.props.navigation.state.params.uph,
          email:this.props.navigation.state.params.email,
          address:this.props.navigation.state.params.addr,
          cars:'',
          addon:'',
          period:'',
          plan:'EASYCLEAN SUPER'
        }
      }
      BookRequest=() => {
        fetch('https://bocquiz.000webhostapp.com/book.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.un,
          phno: this.state.phno,
          type:this.state.plan,
          period:this.state.period,
          email: this.state.email,
          addr: this.state.address,
          addon:this.state.addon,
          carty:this.state.cars
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
        if(responseJson === 'Request Booked')
        {this.props.navigation.navigate('dashboard');}
      }).catch((error) => {
        console.error(error);
      });
      }

  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.text}>
        {`\nPhone Number:`}{this.state.phno}
        {`\nEmail-ID:`}{this.state.email}
        {`\nAddress:`}{this.state.address}
        {`\nPlan:`}{this.state.plan}
      </Text>

      <Picker 
      style={{color:Colors.green_color}}
      selectedValue={this.state.cars}
      onValueChange={(itemValue, itemIndex) => this.setState({cars: itemValue})} >
      <Picker.Item label="Select car type" value="" />
      <Picker.Item label="Sedan" value="Sedan" />
      <Picker.Item label="HatchBack" value="HatchBack" />
      <Picker.Item label="SUV\MUV" value="SUV\MUV" />
    </Picker>
    
    <Picker 
    style={{color:Colors.green_color}}
      selectedValue={this.state.addon}
      onValueChange={(itemValue, itemIndex) => this.setState({addon: itemValue})} >
      <Picker.Item label="Select Add on service" value="" />
      <Picker.Item label="Interiors" value="Interiors" />
      <Picker.Item label="Spray Polish" value="Spray Polish" />
      <Picker.Item label="Engine Back" value="Engine Back"/>
      <Picker.Item label="Not Required (None)" value="None" />
    </Picker>
    
    <Picker 
    style={{color:Colors.green_color}}
      selectedValue={this.state.period}
      onValueChange={(itemValue, itemIndex) => this.setState({period: itemValue})} >
      <Picker.Item label="Select Service type" value=""/>
      <Picker.Item label="One Time Service" value="One Time" />
      <Picker.Item label="Monthly Service" value="Monthly" />
    </Picker>


    <View style={styles.myButton}>
       <Text style={styles.text2} onPress={this.BookRequest}>     Book</Text>
     </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    alignContent:'center',
    justifyContent:'space-evenly',
    margin: 10,
    backgroundColor:'#000000',
  }, 
  myButton:{
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'black',
    textAlign:'center',
    alignContent:'center'
  },
  text:{
    color:Colors.green_color,
    textAlign:'center',
    fontWeight:'200',
    },
    text2:{
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderBottomColor:Colors.green_color,
      borderColor: 'black',
      marginBottom: 10,   
      color:Colors.green_color,
      textAlign:'center',
      fontWeight:'bold',
      alignSelf:'stretch'
      },
 });
