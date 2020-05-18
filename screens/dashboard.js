import React, { Component } from 'react';
import { AppRegistry, Text,StyleSheet,View,ScrollView,Image} from 'react-native';
import Colors from '../constants/Colors';

export default class dashboard extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerLeft: <View style={{ flexDirection: 'row' }}>
        <Image 
        source={require('../assets/icon.png')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 25 / 2,
            marginLeft: 15,
          }}
        />
      </View>,
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
          un: '',
          phno:this.props.navigation.state.params.userphone,
          email:'',
          address:'',
    
        }
      }
      
  componentDidMount() {
    return fetch('https://bocquiz.000webhostapp.com/hi.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phno: this.props.navigation.state.params.userphone
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              un:responseJson[0].username,
              email:responseJson[0].email,
              address:responseJson[0].address
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
  render() {
    
    return (
      <ScrollView> 
        <View style={styles.myButton1}>
          <Text style={styles.text1}  onPress={() => this.props.navigation.navigate('history',{uph:this.state.phno})}>  History of bookings </Text>
        </View>
    <View style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignContent: 'center',
      padding: 20,
      flexWrap: 'wrap',
      backgroundColor:'white'
    }}>
      <View style={{
        flex: 3,
        backgroundColor:'black'
      }}>
      
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:30,color:Colors.green_color}}>EASYCLEAN LITE</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:Colors.green_color}}>20% OFF</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>Quick Shine wash</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>One-time/Monthly services</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20}}></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>3 Times/week</Text>
          
      <View style={styles.container}>
        <View style={styles.myButton}>
          <Text style={styles.text} onPress={() => this.props.navigation.navigate('plan1',{un:this.state.un,uph:this.state.phno,email:this.state.email,addr:this.state.address})}
>EASYCLEAN LITE</Text>
        </View>
        <Text></Text>
      </View>
       
       </View>
      <View style={{
        flex: 1,
       
        backgroundColor:'white'
      }} >
        <Text></Text>
        <Text></Text>
      </View>
      <View style={{
        flex: 3,
       
        backgroundColor:'black'
      }} >
        <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:30,color:Colors.green_color}}>EASYCLEAN PLUS</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:Colors.green_color}}>25% OFF</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>Water less foam wash + Basic interiors  </Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>One-time/Monthly services</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20}}></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>1 Time/week</Text>
          
      <View style={styles.container}>
        <View style={styles.myButton}>
          <Text style={styles.text}  onPress={() => this.props.navigation.navigate('plan2',{un:this.state.un,uph:this.state.phno,email:this.state.email,addr:this.state.address})}
>EASYCLEAN PLUS</Text>
        </View>
      </View>
      <Text></Text>
      </View>
      <View style={{
        flex: 1,
       
        backgroundColor:'white'
      }} >
        <Text></Text>
        <Text></Text>
      </View>
      <View style={{
        flex: 3,
       
        backgroundColor:'black'
      }} >
        <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:30,color:Colors.green_color}}>EASYCLEAN SUPER</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:Colors.green_color}}>25% OFF</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>Water less foam wash + Spray polish + Basic interiors</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>One-time/Monthly services</Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20}}></Text>
          <Text style={{fontWeight: 'bold',textAlign:'center',fontSize:20,color:'white'}}>1 Time/week</Text>
          
      <View style={styles.container}>
        <View style={styles.myButton}>
          <Text style={styles.text}  onPress={() => this.props.navigation.navigate('plan3',{un:this.state.un,uph:this.state.phno,email:this.state.email,addr:this.state.address})}
>EASYCLEAN Super</Text>
        </View>
      </View>
      <Text></Text>
      </View>

      <View style={{
        flex: 1,
        backgroundColor:'white'
      }} />
    </View>
    
  
    </ScrollView>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myButton:{
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:Colors.green_color,
     },
     myButton1:{
       margin:2,
      paddingHorizontal:20,
      paddingVertical:15,
      backgroundColor:'black',
       },
     text:{
      color:Colors.black,
      fontSize:15,
      fontWeight:'bold'
      },
      text1:{
        color:Colors.green_color,
        fontSize:15,
        fontWeight:'bold'
        },
  });