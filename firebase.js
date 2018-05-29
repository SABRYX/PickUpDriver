//KEY
import * as firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDspManpXTU1PN1eF1ES8d7inNfNvMEsYc",
    authDomain: "pickup-pickup.firebaseapp.com",
    databaseURL: "https://pickup-pickup.firebaseio.com",
    projectId: "pickup-pickup",
    storageBucket: "pickup-pickup.appspot.com",
    messagingSenderId: "131345122097"
  };


export default class Firebase {
    static auth ;
    static init() {
        firebase.initializeApp({
          apiKey: "AIzaSyDspManpXTU1PN1eF1ES8d7inNfNvMEsYc",
          authDomain: "pickup-pickup.firebaseapp.com",
          databaseURL: "https://pickup-pickup.firebaseio.com",
          projectId: "pickup-pickup",
          storageBucket: "pickup-pickup.appspot.com",
          messagingSenderId: "131345122097"
        });
        Firebase.auth=firebase.auth();
        Firebase.database=firebase.database();
    }


}