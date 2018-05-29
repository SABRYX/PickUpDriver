import React from "react";
import { StatusBar,View,Text,TouchableHighlight,StyleSheet} from "react-native";
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
import Map from "./Map.js";
import Overlay from 'react-native-modal-overlay';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import MapStore from "./MapStore.js";
import { observer } from "mobx-react";


@observer
class ScreenEight extends React.Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container  style={{backgroundColor:"white"}}>
        <Header style={{marginTop:0,backgroundColor:"white",elevation:0}}>
          <Left style={{flex:1}}/>
          <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color:"black",fontSize:20}}>الرئيسية</Title>
          </Body>
          <Right style={{flex:1}}>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"black",fontSize:30}}/>
            </Button>
          </Right>
        </Header>
        <Content style={{marginTop:0}}contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{height:"70%"}}>
            <Map navigation={this.props.navigation}/>
          </View>
          <View style={{height:"30%",marginRight:"5%",marginTop:"5%",}}>
            <Text style={{color:"black",fontSize:18,textAlign:"right"}}>متاح</Text>
            <Text style={{color:"rgb(117,117,117)",fontSize:16,textAlign:"right"}}> انت الأن متاح لإستقبال طلبات النقل </Text>
            <TouchableHighlight
              onPress={()=>{if(MapStore.lastLat != null){this.props.navigation.navigate('ScreenSeven', { screen: 'ScreenSeven' })}}}
              color="black"
              style={styles.touchableHighlight}>
                <Text style={styles.text}>إلغاء</Text>
            </TouchableHighlight>
          </View>
       
      
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text:{
    color:"white",
    marginTop:"5%",
    fontSize:18,
    marginLeft:"5%",
    textAlign:"center",
  },
  touchableHighlight:{
    backgroundColor:"rgb(102,205,204)",
    position: 'absolute',
    width:"60%",
    height:"38%",
    marginTop:"18%",
    marginLeft:"30%",
    marginRight:"30%",
    borderRadius:100,
  },



})


export default  ScreenEight ;