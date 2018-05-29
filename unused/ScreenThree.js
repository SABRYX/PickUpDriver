
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,

} from 'react-native';
import FireStore from "./firestore"

class ScreenThree extends Component {
  componentWillMount () {
          const { navigate } = this.props.navigation;
        setTimeout(() => {if (FireStore.welcome == true ){navigate("ScreenSix", {screen: "ScreenSix"})}else{
          navigate("ScreenFour", {screen: "Screen Four"})
        }},4000);
        

      }
      
  render() {
    return (
      <View style={styles.bg}>
      <View style={styles.partone}>
      <Image source={require("./images/onBoarding2.png")} style={styles.image}/>
      <Text style={styles.big}>FAST AS LIGHTING</Text>
      <Text style={styles.small}>Tired of waiting. We can deliver anything you need as fast as possible.</Text>
      </View>
      <View>
      <Text style={{textAlign:"center",color:"rgb(102,205,204)",marginLeft:230,justifyContent:"flex-end",fontSize:16,marginTop:20}}>Done</Text>
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


export default ScreenThree;
