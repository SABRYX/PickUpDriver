import React, { Component } from 'react';
import { StatusBar,StyleSheet,View,Image,TouchableHighlight } from "react-native";
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

import FireStore from "./firestore";
import Firebase from "./firebase";
import { observer } from 'mobx-react';

@observer
class LogOut extends Component {
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
            <Title style={{color:"black",marginLeft:78,}}>Logout</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginTop:10}}contentContainerStyle={{ flexGrow: 1 }}>
        <View>
        <TouchableHighlight
          color="black"
          style={styles.TouchableHighlight}
          onPress={() => { Firebase.auth.signOut().then(function() {
            FireStore.welcome=false;
          }).catch(function(error) {
            // An error happened.
          }); }}
          >
          <Text style={styles.texts}>LogOut</Text>
          </TouchableHighlight>
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
    
    
      },
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
});


export default LogOut;
