import React from "react";
import { StatusBar,View,Text,TouchableHighlight,Image,StyleSheet,ScrollView,TouchableOpacity,Modal } from "react-native";
import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import MapStore from './MapStore.js';
import { observer } from "mobx-react";
import Overlay from 'react-native-modal-overlay';
import FontAwesome, { Icons } from 'react-native-fontawesome';


@observer
class ScreenEleven extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container  style={{backgroundColor:"white"}}>
        <Header style={{marginTop:0,backgroundColor:"white",elevation:0}}>
          <Left style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"black",fontSize:30}}/>
            </Button>
          </Left>
          <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color:"black"}}>New Pickup</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Content style={{marginTop:0}}contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{height:"15%",marginLeft:"5%",marginTop:"5%"}}>
          
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ScreenTen',{screen:'ScreenTen'})} style={styles.touchableHighlight}>
          
          <Image source= {require("./images/backButtonIcon.png")} style={styles.image}/>

        </TouchableHighlight>
        <Text style={styles.texthead}>CHECKOUT</Text>
        </View>
        <View style={{marginTop:"5%",height:"70%",marginRight:"5%",marginLeft:"3%",width:"100%"}}>
        <ScrollView style={styles.secView}>
         <Text style={styles.texthead2}>Distance estimate</Text>
         <Text style={styles.textWithin}>KM {MapStore.distanceInKM}</Text>
         <Text style={styles.texthead2}>Price estimate</Text>
         <Text style={styles.textWithin}>EGP {MapStore.price}</Text>
         <Text style={styles.texthead2}>Payment method</Text>
         <Text style={styles.textWithin}>Cash on delivery</Text>
         <Text style={styles.texthead2}>Car type</Text>
         <Text style={styles.textWithin}>{MapStore.carType.type}</Text>
         <Text style={styles.texthead2}>Pickup location</Text>
         <Text style={styles.textWithin}>{MapStore.Address}</Text>
         <Text style={styles.texthead2}>Drop location</Text>
         <Text style={styles.textWithin}>{MapStore.dropLocationAddress }</Text>
         </ScrollView>
         
        
         <TouchableHighlight style={styles.touchableHighlightFinish} onPress={()=>MapStore.toggleModal()}><Text style={styles.textTouchable}>FINISH</Text></TouchableHighlight>       

        
       
        </View>
      
         <Overlay visible={MapStore.isModalVisible}  animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}} childrenWrapperStyle={{backgroundColor: 'white',height:"30%"}} >
          <View style={{borderBottomWidth: 0, width: 100,}}><Text style={{ fontSize: 30, textAlign: 'center',color:"rgb(102,205,204)"}}> <FontAwesome>{Icons.check}</FontAwesome> </Text></View>
          <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center',color:"black"}}>
          Your pickup has been submitted successfully
          </Text>
          <TouchableHighlight onPress={()=>MapStore.toggleModal()} style={styles.modalTouchable}>
                <Text style={styles.textTouchable}>OK</Text>
              </TouchableHighlight>
        </Overlay>
      
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
texthead:{
  marginTop:"1%",
  fontSize:28,
  color:"black",
  fontWeight:"400",
  marginLeft:"1%"
},
secView:{
  marginLeft:"10%",
  marginTop:"0%",
  marginRight:"10%",
  elevation:0.5,
  width:"70%",
  height:"40%",
  marginBottom:"5%",
  borderWidth:0,
  
  

},
texthead2:{
  fontSize:17,
  color:"black",
  marginTop:"4%",
  marginLeft:"4%"
  

},
textWithin:{
  fontSize:16,
  color:"rgb(161,159,159)",
  marginRight:"20%",
  marginLeft:"4%",

},
image:{
  height:"100%",
  width:"100%",
},
touchableHighlight:{
  marginTop:"0%",
  height:"36%",
  width:"8.5%",
  borderRadius:100,
  padding:0

},
touchableHighlightFinish:{
  backgroundColor:"rgb(102,205,204)",
    width:"80%",
    height:"12%",
    marginTop:"6%",
    marginLeft:"7%",
    marginRight:"10%",
    borderRadius:100,
},
textTouchable:{
  marginLeft:"40%",
  marginTop:"4%",
  marginRight:"40%",
  color:"white",
  fontSize:15,
  textAlign:'center',

},
modal:{
  marginTop:"50%",
  marginLeft:"15%",
  height:"25%",
  width:"70%",
  backgroundColor:"white",
},
modalTouchable:{
  backgroundColor:"rgb(102,205,204)",
  borderRadius:100,
  marginTop:"10%",
  marginLeft:"5%",
  marginRight:"5%",
  height:"25%",
  width:"40%",


},
})


export default  ScreenEleven ;