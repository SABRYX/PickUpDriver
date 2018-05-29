import React from "react";
import { StatusBar,View,Text } from "react-native";
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
import DropMap from "./DropMap.js";
import Geocoder from 'react-native-geocoder';
import MapStore from './MapStore.js';
import { observer } from "mobx-react";

@observer
class ScreenNine extends React.Component {

    
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
            <Title style={{color:"black"}}>Drop Location</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Content style={{marginTop:0}}contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{height:"100%"}}>
        <DropMap navigation={this.props.navigation}/>
        </View>
        </Content>
      </Container>
    );
  }
}


export default  ScreenNine ;