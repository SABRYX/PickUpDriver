import React,{Component} from "react";

import FireStore from "./firestore"
import ScreenFour from "./ScreenFour";
import ScreenSix from "./ScreenSix";
import { observer } from "mobx-react";

@observer
export default class Login extends Component {


    render(){
        const { state, navigate } = this.props.navigation;
        
            if (FireStore.welcome == false){
                return(<ScreenFour navigation={this.props.navigation}/>)
            }
            else{
                return(<ScreenSix/>)
            }
        
    }

}