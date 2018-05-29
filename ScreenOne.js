
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { observer } from 'mobx-react';
import FireStore from "./firestore";
import Firebase from "./firebase"; 

class Splash extends Component {

  constructor(props){
    super(props);
    Firebase.init();
  }
  componentWillMount () {
    const { navigate } = this.props.navigation;
    Firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
       FireStore.welcome = true;
      }
    });
    setTimeout(() => {if (FireStore.welcome == true ){navigate("ScreenSeven", {screen: "ScreenSeven"})}else{
      navigate("ScreenFour", {screen: "Screen Four"})
    }},4000);
}
     
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


export default Splash;
