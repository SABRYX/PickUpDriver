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


@observer
export default class Map extends Component {
  constructor(){
    super();
    
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*2.5,
        longitudeDelta: 0.00421*2.5
      }
      MapStore.onRegionChange(region, region.latitude, region.longitude);
    })
    };


  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={MapStore.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={MapStore.onRegionChange}
          enableHighAccuracy={true}>
        </MapView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },

});

