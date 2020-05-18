import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';

export default class login extends Component {

    static navigationOptions =
     {
        title: 'History',
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
          phoneno:this.props.navigation.state.params.uph,
          isLoading: true
        }
      }

    
      componentDidMount() {
    
        return fetch('https://bocquiz.000webhostapp.com/history.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phno: this.props.navigation.state.params.uph
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      } 
 
     render()  {
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
        return (
    <View style={Styles.container}>
            <Text style={Styles.text1}><Text style= {Styles.text}>History of bookings</Text></Text>
            <ListView
            dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}
            renderRow={ (rowData) => <Text style={Styles.rowViewContainer} >
                        {`\nBooking Date`}: {rowData.book_date}
                        {`\nPlan Booked`}: {rowData.reqtype}
                        {`\nPlan period`}: {rowData.req_period}
                        {`\nAdd on services`}: {rowData.addon}
                        {`\nCar type`}: {rowData.cartype}    
                      </Text> }
          /> 
    </View>
        );
      }
    }
      const Styles = StyleSheet.create({
 
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
          backgroundColor: '#000000',  
        },
         text:{
          color:Colors.green_color,
          textAlign:'center',
          textAlign: 'center', 
          marginBottom: 15,
          fontSize: 20,
          },
         rowViewContainer: {
          fontSize: 16,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          color:Colors.green_color,
          marginBottom: 15,
        },
        text1: {
          width: 300,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderBottomColor:Colors.green_color,
          borderColor: 'black',
          marginBottom: 10,   
          color:Colors.green_color,
          textAlign:'center'
        },
        });