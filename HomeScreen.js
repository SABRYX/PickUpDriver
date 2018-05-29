import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
  Icon
} from "native-base";
import Truck from './Truck.js';

class HomeScreen extends React.Component {
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
          <Body  style={{ flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color:"black"}}>Home</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Content contentContainerStyle={{ flexGrow: 1 }}>
        <Truck navigation={this.props.navigation}/>
        </Content>
      </Container>
    );
  }
}

export default  HomeScreen ;
