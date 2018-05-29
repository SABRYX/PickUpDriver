import React from "react";
import { StatusBar,View,Text,StyleSheet,TouchableHighlight } from "react-native";
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
import MapView from "react-native-maps";
import Polyline from '@mapbox/polyline';
import MapStore from './MapStore.js';
import {observer} from 'mobx-react';
import geolib from 'geolib';

import MapViewDirections from 'react-native-maps-directions';

@observer
export default class ScreenTen extends React.Component {
  constructor(){
    super();
    
  }
 


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
            <Title style={{color:"black"}}>Verify</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Content style={{marginTop:0}}contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{height:"100%"}}>
        
        <MapView
          style={styles.map}
          region={MapStore.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={MapStore.onRegionChange}
          enableHighAccuracy={true}>
             <MapViewDirections
                origin={MapStore.origin}
                destination={MapStore.destination}
                apikey={MapStore.ApiKey}
                strokeWidth={3}
                strokeColor="blue"
              />
         </MapView>
         <TouchableHighlight
            onPress={ ()=>{ this.props.navigation.navigate('ScreenEleven', { screen: 'ScreenEleven' });
                MapStore.distanceInKM = geolib.getDistance(
                  {latitude: MapStore.origin.latitude, longitude : MapStore.origin.longitude},
                  {latitude: MapStore.destination.latitude, longitude : MapStore.destination.longitude});
                MapStore.distanceInKM= (MapStore.distanceInKM/1000)+((MapStore.distanceInKM/1000)*(25/100));
                MapStore.price=Math.ceil(MapStore.distanceInKM)*MapStore.carType.price;
                MapStore.isModalVisible=false;
              }}
            color="black"
            style={styles.touchableHighlight} >
          <Text style={styles.text }>Confirm Route</Text>
        </TouchableHighlight>

        </View>
       
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },
  touchableHighlight:{
    backgroundColor:"white",
    position: 'absolute',
    width:"90%",
    height:"12%",
    marginTop:"120%",
    marginLeft:"7%",
    marginRight:"7%",
    borderRadius:100,

  },
  text:{
    color:"black",
    marginTop:"2%",
    fontSize:20,
    marginLeft:"5%",
    textAlign:"center",
    
  },

})
