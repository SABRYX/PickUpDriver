import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
} from "native-base";
import { Avatar } from 'react-native-elements';
const routes = ["Home","Follow","Transporter","About","LogOut"];
export default class SideBar extends React.Component {
  render() {
    const name = "Altair The Son"
    return (
      <Container>
        <Content >
          <Avatar
              rounded
              large
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{
                marginTop:50,
                alignItems:"center",
                alignSelf:"center",

              }}
          />
          <Text style={{marginTop:10,color:"rgb(102,205,204)",fontSize: 16,textAlign:"center"}}>{name}</Text>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 50,alignContent:"center",}}
            renderRow={data => {
              return (
                <ListItem
                  bordered
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
