import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {BackAndroid,ToastAndroid} from 'react-native';

class Transporter extends Component {
  render() {
    return (
      <View style={styles.bg}>
      <Text style={styles.text}>Please Visit Our Website for further Information on how to be a Transporter</Text>
      </View>
    );

  }
};

const styles = StyleSheet.create({
  bg:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",

    },
    text:{
        color:"rgb(102,205,204)",
        marginRight:20,
        marginLeft:20,
        fontSize:20,
        textAlign:'center',
    }
});


export default Transporter;
