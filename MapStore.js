import {observable} from 'mobx';
class MapStore {
  @observable mapRegion = null;
  @observable lastLat = null
  @observable lastLong = null;
  @observable cars = true;
  @observable Address = null ;
  @observable cords = {
    lat: null,
    lng: null
     };
  @observable drop = "Search location";
  @observable dropLocationAddress = null ;
  @observable dropLocation={
    lat: null,
    lng: null
  };
  @observable markerDropLocation = {
    latitude: null,
    longitude: null
     };
  
  @observable coords = [];
  @observable availability = true ;
  @observable origin ={
    latitude:this.lastLat,
    longitude:this.lastLong
  };
  @observable destination ={
    latitude:this.dropLocation.lat,
    longitude:this.dropLocation.lng
  }
  @observable ApiKey = "AIzaSyAmELawHjCI9_rCxB1qDuM3sYy1wzuWtHA";
  @observable distanceInKM = null ;
  @observable price = null;
  @observable carType =null;
  @observable carType1 = {price:5,type:"Small van"};
  @observable carType2 = {price:10,type:"Truck"};
  @observable isModalVisible = null ;
  @observable isModalVisible1 = false ;
  
  onRegionChange(region, lastLat, lastLong) {
    
      this.mapRegion=region,
      // If there are no new values set use the the current ones
      this.lastLat= lastLat || this.lastLat,
      this.lastLong= lastLong || this.lastLong,
      this.cords={lat:this.lastLat,lng:this.lastLong},
      this.markerDropLocation={latitude:this.lastLat,longitude:this.lastLong},
      this.origin = {latitude:this.lastLat,longitude:this.lastLong}
      

  };

  toggleModal(){
    if (this.isModalVisible==true){this.isModalVisible=false}else{this.isModalVisible = true}
  } 
  toggleModal1(){
    if (this.isModalVisible1==true){this.isModalVisible1=false}else{this.isModalVisible1 = true}
  } 



  





  checkCars(){
    return this.cars;
  }
  checkAvailability(){
    return this.availability
  }

  
}
export default new MapStore();