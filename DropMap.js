import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps'; // 0.20.1
import MapStore from './MapStore.js';
import {observer} from 'mobx-react'; 
import { Button, colors } from 'react-native-elements';
import Geocoder from 'react-native-geocoder';


@observer
export default class DropMap extends Component {
  constructor(){
    super();
    
  }
 


  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          region={MapStore.mapRegion}
          followUserLocation={true}
          style={styles.map}
          enableHighAccuracy={true}>
          <MapView.Marker draggable
            coordinate={MapStore.markerDropLocation}
            onDragEnd={(e) =>{MapStore.dropLocation.lat = e.nativeEvent.coordinate.latitude;
                              MapStore.dropLocation.lng = e.nativeEvent.coordinate.longitude;
                              MapStore.destination = {latitude:MapStore.dropLocation.lat,longitude:MapStore.dropLocation.lng}}}/>
        </MapView>
        <TouchableHighlight
          onPress={()=>{
            this.props.navigation.navigate('ScreenEight', { screen: 'ScreenEight' });
            Geocoder.geocodePosition(MapStore.dropLocation).then(res => {
              MapStore.dropLocationAddress =res[0].formattedAddress;});}}
          color="black"
          style={styles.touchableHighlight} >
          <Text style={styles.text }>Done</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },
  text:{
    color:"black",
    marginTop:"7%",
    fontSize:20,
    marginLeft:"5%",
    textAlign:"center",
    
  },
  touchableHighlight:{
    backgroundColor:"white",
    position: 'absolute',
    width:"40%",
    height:"9%",
    marginTop:"120%",
    marginLeft:"30%",
    marginRight:"30%",
    borderRadius:100,

  },

});

