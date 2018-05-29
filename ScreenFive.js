
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Text,

} from 'react-native';
import Firebase from "./firebase";
import FireStore from "./firestore.js";
import { observer } from 'mobx-react';



@observer
class ScreenFive extends Component {
  constructor(props) {
    super(props);

    // Firebase.init();
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
          placeholder="أسم االسائق "
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={ (text) => { FireStore.register.firstName = text }}
          value={FireStore.register.firstName}
          />
      </View>
      <View style={styles.border}>
        <TextInput
          placeholder="أسم العائلة"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={ (text) => { FireStore.register.lastName = text ;
            FireStore.register.name=FireStore.register.firstName+" "+FireStore.register.lastName; }}
          value={FireStore.register.lastName}
          />
      </View>

      <View style={styles.border}>
        <TextInput
          placeholder="رقم الهاتف "
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={ (text) => { FireStore.register.phoneNumber = text }}
          value={FireStore.register.phoneNumber}
          
          />
      </View>

      <View style={styles.border}>
        <TextInput
          placeholder="البريد الاكتروني "
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={ (text) => { FireStore.register.email = text }}
          value={FireStore.register.email}
          />
      </View>



      <View style={styles.border}>
      <TextInput
        placeholder="الرمز السري "
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={ (text) => { FireStore.register.password = text }}
        value={FireStore.register.password}
        />
      </View>

      </View>
      <View style={styles.submit}>
        <TouchableHighlight
          color="black"
          style={styles.TouchableHighlight}
          onPress={() => {
            FireStore.registerFirebase(FireStore.register.email,FireStore.register.password,FireStore.register.firstName,FireStore.register.lastName,FireStore.register.phoneNumber)
            navigate("HomeScreen", { screen: "HomeScreen" });
          }}
          >
          <Text style={styles.texts}>تسجيل </Text>
          </TouchableHighlight>
      </View>

        <Text
        style={styles.already}
        onPress={() => navigate("ScreenFour",{screen:"ScreenFour"}) }>
        انت طيار بلفعل  </Text>


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
    marginTop:50,



  }
,
  logo :{
    width: 139,
    height: 28
  }
  ,
fieldcontainer:{

margin:10,
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
  fontSize:17,
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

TouchableHighlight:{
  padding:15,
  alignItems:"center",
  backgroundColor:"rgb(102,205,204)",
  borderRadius:500,

}
,
texts:{
  color:"white",
  fontSize:19,
  fontFamily:"sans-serif-light"


},
already:{
  marginTop:11,
  alignItems:"center",
  justifyContent:"center",
  fontSize:17,
  textAlign:"center",
  color:"rgb(161,159,159)"

},

});
export default ScreenFive;
