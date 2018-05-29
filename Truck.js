import React , {Component} from "react" ;
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,


} from "react-native";
import MapStore from './MapStore.js';
import {observer} from "mobx-react";
import FireStore  from "./firestore";


@observer
class Truck extends Component {
  render(){
    return (
    <View style={styles.home}>
      <View style={styles.containerStyle}>
        <TouchableOpacity style={styles.vanstyle} activeOpacity={0.4}
        onPress={ ()=>{this.props.navigation.navigate('ScreenSeven', { screen: 'ScreenSeven' }); MapStore.carType = MapStore.carType1}}
        >
          <Image
            source={require("./images/carType1.png")}
            style={styles.ImageIconStyle}
            />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> SMALL VAN </Text>
          <Text style={styles.TextKilo}> 50kg </Text>
        </TouchableOpacity>
        <View style={styles.SeparatorLine2} />
        <TouchableOpacity 
          style={styles.truckstyle} 
          activeOpacity={0.4} 
          onPress={ ()=>{
            this.props.navigation.navigate('ScreenSeven', { screen: 'ScreenSeven' });
            MapStore.carType = MapStore.carType2;
            FireStore.getActiveCars()
            
          }}
        >
          <Image
          source={require("./images/carType2.png")}
          style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TRUCK </Text>
          <Text style={styles.TextKilo}> 20kg </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerStyle}>
        <TouchableOpacity style={styles.truckstyle} activeOpacity={0.4}>
            <Image
            source={require("./images/carType2.png")}
            style={styles.ImageIconStyle}
              />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TRUCK </Text>
          <Text style={styles.TextKilo}> 35kg </Text>
        </TouchableOpacity>
        <View style={styles.SeparatorLine2} />
        <TouchableOpacity style={styles.vanstyle} activeOpacity={0.4}>
          <Image
            source={require("./images/carType1.png")}
            style={styles.ImageIconStyle}
            />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> SMALL VAN </Text>
          <Text style={styles.TextKilo}> 60kg </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerStyle2}>
        <TouchableOpacity style={styles.vanstyle} activeOpacity={0.4}>
          <Image
            source={require("./images/carType1.png")}
            style={styles.ImageIconStyle}
            />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> SMALL VAN </Text>
          <Text style={styles.TextKilo}> 60kg </Text>
        </TouchableOpacity>
        <View style={styles.SeparatorLine2} />
        <TouchableOpacity style={styles.truckstyle} activeOpacity={0.4}>
          <Image
          source={require("./images/carType2.png")}
          style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TRUCK </Text>
          <Text style={styles.TextKilo}> 45kg </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
home:{
  backgroundColor:"white",
  height:"100%",
  width:"100%"
},

containerStyle:{
  flexDirection: 'row',
  alignItems: 'center',
  height: '33%',
  width:'100%',
  borderBottomWidth :0.5,
  borderBottomColor: 'rgb(161,159,159)',
},
containerStyle2:{
  flexDirection: 'row',
  alignItems: 'center',
  height: '33%',
  width:'100%',
},


truckstyle: {
  flexDirection: 'column',
  alignItems:"center",
  backgroundColor: 'white',
  justifyContent:"center",
  width: "50%",
  height: "100%"
},
vanstyle: {
  flexDirection: 'column',
  alignItems:"center",
  backgroundColor: 'white',
  justifyContent:"center",
  width: "50%",
  height: "100%"
},

ImageIconStyle: {
   height: 70,
   width: 70,
   resizeMode : 'contain',
   opacity:1.0

},

TextStyle :{
    height: 19,
    fontSize: 16,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 2,
    textAlign: "center",
    color: "black"

},
TextKilo:{
  fontSize: 12,
  fontWeight: "300",
  fontStyle: "normal",
  letterSpacing: 1.5,
  textAlign: "center",
  color: "rgb(161,159,159)",
  marginTop:5
},

SeparatorLine :{
backgroundColor : '#fff',
width: 10,
height: 5
},
SeparatorLine2 :{
  backgroundColor : "rgb(161,159,159)",
  width: 0.5,
  height: "100%"
  }
});


export default Truck ;
