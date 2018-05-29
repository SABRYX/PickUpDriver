import React, { Component } from 'react';
import { StatusBar,StyleSheet,View,Image } from "react-native";
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
  Icon,
  Right
} from "native-base";

class About extends Component {
  render() {
    return (
        <Container  style={{backgroundColor:"white"}}>
        <Header style={{marginTop:0,backgroundColor:"white"}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"black",fontSize:30}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:"black",marginLeft:78,}}>About</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginTop:10}}contentContainerStyle={{ flexGrow: 1 }}>
        <View>
            <View style={styles.logocontainer}>
                <Image source={require("./logo.png")} style={styles.logo}/>
            </View>
            <View style={styles.logocontainer}>
                <Image source={require("./images/onBoarding1.png")} style={styles.about_image2}/>
            </View>
           
            <Text style={styles.pickupHelpsYouTo}>Pickup helps you to transport  anything you wish to deliver wither its food, 
                furniture, electronics, or pets, as soon as possible. Pickup helps you to transport 
                 anything you wish to deliver wither its food, furniture, electronics, or pets, as soon as possible. 
                 Pickup helps you to transport  anything you wish to deliver wither its food, furniture, electronics, 
                 or pets, as soon as possible. Pickup helps you to transport  anything you wish to deliver wither its food,
                  furniture, electronics, or pets, as soon as possible. </Text>
        </View>
        
        </Content>
      </Container>
    );

  }
};

const styles = StyleSheet.create({
  bg:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    logocontainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    
    
      }
    ,
      logo :{
        width: 159,
        height: 48
      },
    about_image2:{
        justifyContent:"center",
        alignItems:"center",
        width:200,
        height: 170

    },
    pickupHelpsYouTo:{
        width: 272,
        height: 140,
        fontSize: 12,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color:"rgb(117,117,117)",
        textAlign:"center",
        marginLeft:45,
        marginTop:20
      }
});


export default About;
