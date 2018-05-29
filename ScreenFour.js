import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Text

} from 'react-native';
import Firebase from "./firebase.js";
import FireStore from "./firestore.js";
import { observer } from 'mobx-react';

@observer
class ScreenFour extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.main2}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
            source={require("./logo.png")} />
        </View>

      <View style={styles.fieldcontainer}>

      <View style={styles.border}>
        <TextInput
          placeholder="البريد الاكتروني"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={(text)=>FireStore.Login.email=text}
          />
      </View>


      <View style={styles.border}>
      <TextInput
        placeholder="الرقم السري"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text)=>FireStore.Login.password=text}
        />
      </View>

      </View>
      <View style={styles.submit}>
        <TouchableHighlight
          color="black"
          style={styles.TouchableHighlight}
          onPress={ ()=> { 
            FireStore.signIn(FireStore.Login.email,FireStore.Login.password);
            FireStore.auto(FireStore.Login.email,FireStore.Login.password).then(function() {
              if(FireStore.welcome == true){navigate("ScreenSeven", {screen: "ScreenSeven"});}
            })
            
          }} 
          >
          <Text style={styles.texts}>تسجيل الدخول </Text>
          </TouchableHighlight>
          
      </View>
      
      <Text
      style={styles.already}
      onPress={() => navigate("ScreenFive", { screen: "ScreenFive" })}>
      العمل كطيار</Text>





      </View>
    );
  }
};

const styles = StyleSheet.create({
  main2:{
    flex:1,
    backgroundColor:'white',


  },
  logocontainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:"40%",


  }
,
  logo :{
    width: 139,
    height: 28
  }
  ,
fieldcontainer:{

margin:5,
marginTop:40,


},
border:{
  marginRight:20,
  marginLeft:20,
  borderRadius:100,
  marginBottom:15,
  elevation:1
},

input:{
  backgroundColor:'white',
  height:34,
  marginBottom:10,
  marginTop:5,
  color:"black",
  padding:2,
  marginLeft:20,
  marginRight:20,
  fontSize:18,
  opacity:0.2,
  textAlign:"right"

}
,
submit:{
marginTop:5,
marginLeft:30,
marginRight:30,


}
,
submitfg:{
marginTop:20,
marginLeft:30,
marginRight:30,

}
,

TouchableHighlight:{
  padding:15,
  alignItems:"center",
  backgroundColor:"rgb(102,205,204)",
  borderRadius:100,

}
,
texts:{
  color:"white",
  fontSize:18,
  fontFamily:"sans-serif-light"


},
already:{
  marginTop:11,
  alignItems:"center",
  justifyContent:"center",
  fontSize:17,
  textAlign:"center",
  backgroundColor:'white',
  color:"rgb(161,159,159)"

},
loginwith:{
  color:"rgb(161,159,159)",
  marginTop:14,
  alignItems:"center",
  justifyContent:"center",
  fontSize:15,
  textAlign:"center"

},

});
export default ScreenFour;
