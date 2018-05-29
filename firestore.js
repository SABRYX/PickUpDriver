import React from "react";

import {observable} from 'mobx';
import Firebase from "./firebase.js";
import * as firebase from "firebase";
import ScreenSix from './ScreenSix.js';

class FireStore {

    @observable register = {
        firstName:null,
        lastName:null,
        name:null,
        email:null,
        password:null,
        phoneNumber:null,
    }
    @observable Login = {
        email:null,
        password:null,
    }
    @observable welcome = false;
    @observable activeCarsArray=[];

    async registerFirebase(email,password,firstName,lastName,phoneNumber){
        try{
            Firebase.auth.createUserWithEmailAndPassword(email,password);
            Firebase.database.ref("drivers/").push({
                username:firstName+" "+lastName,
                email:email,
                phoneNumber:phoneNumber,
                type:"driver"
            })
        }
        catch(error){
            console.log(error.toString())
        }
    }

    async signIn(email,password){
        try{
            await  Firebase.auth.signInWithEmailAndPassword(email, password)
                this.welcome=true;
            
        }
        catch(error){
            console.log(error.toString())

        }
    }
    async Auth(){

        try{
            Firebase.auth.onAuthStateChanged(function(user) {
                if (user) {
                 this.welcome = true;
                 return (<ScreenSix/>)
                }
              });
        }
        catch(error){
            alert(error)
        }
    }
    async logout() {
        try {
            await Firebase.auth.signOut();
            // Navigate to login view
        } catch (error) {
            console.log(error);
        }
    }
    async auto(){
         Firebase.auth.onAuthStateChanged(function(user) {
            if (user) {
             this.welcome = true;
             Firebase.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
             .then(function() {
                return firebase.auth().signInWithEmailAndPassword(email, password);
              alert("i did work")
             })
             .catch(function(error) {
               var errorCode = error.code;
               var errorMessage = error.message;
             });

            }
          }); 
    }
    async getActiveCars(){
        const rootRef = Firebase.database.ref("users");
        const cars = rootRef.orderByChild('phoneNumber').equalTo('01012345678');
        var cars2 = []

        const cararray = cars.once("value") .then(function(snapshot){ 
            snapshot.forEach(function(childSnapshot) {
            // key will be "ada" the first time and "alan" the second time
            var key = childSnapshot.val();
            // childData will be the actual contents of the child
            var childData = childSnapshot.toJSON();
            cars2.push(key);
            console.log(cars2);
            console.log(childSnapshot.key)
        })
        console.log(cars2)
    
    })




        
}





}


export default new FireStore(); 