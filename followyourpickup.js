import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {BackAndroid,ToastAndroid} from 'react-native';

class Follow extends Component {
  render() {
    return (
      <View style={styles.bg}>
      <Image source={require("./logo.png")}/>
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
      backgroundColor:'white'
    },
});


export default Follow;
