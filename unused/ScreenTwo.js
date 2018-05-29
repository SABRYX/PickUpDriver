
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import { observer } from 'mobx-react';
import FireStore from "./firestore";
import Firebase from "./firebase"; 

@observer
class ScreenTwo extends Component {
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
          setTimeout(() => navigate("ScreenThree", {screen: "Screen Three"}),4000);
      }

  render() {
    const { state, navigate } = this.props.navigation;
    return (

      <View style={styles.bg}>
      <View style={styles.partone}>
      <Image source={require("./images/onBoarding1.png")} style={styles.image}/>
      <Text style={styles.big}>We deliver any thing</Text>
      <Text style={styles.small}>You can deliver furniture, food, pets, clothes and electronics. You just press the button </Text>
      </View>
      <View>
      <Text style={{textAlign:"center",color:"rgb(102,205,204)",marginLeft:230,justifyContent:"flex-end",fontSize:16,marginTop:20}}
      onPress={() => navigate("ScreenFour", { screen: "ScreenFour" })}>Skip</Text>
      </View>
      </View>

    );

  }
};

const styles = StyleSheet.create({
  bg:{
      width:"100%",
      height:"100%",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    partone:{
      height:"70%",
      alignItems: 'center',

    },
    image:{
      width: 211,
      height: 256,

    },
    big:{
      marginTop:10,
      fontSize:29,
      backgroundColor:"white",
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: "500",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",

    },
    small:{
      color:'grey',
      marginTop:10,
      backgroundColor:"white",
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:20,
      marginRight:20,
      width: 244,
      height: 28,
      fontSize: 12,
      fontWeight: "300",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
    },
});


export default ScreenTwo;
