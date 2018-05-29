import React from 'react';
import Firebase from "./firebase.js";
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import Splash from './ScreenOne';
import ScreenFour from './ScreenFour.js';
import ScreenFive from './ScreenFive.js';
import ScreenSix from './ScreenSix.js';
import ScreenSeven from "./ScreenSeven.js";
import ScreenEight from "./ScreenEight.js";
import Login from "./Login.js"
import SideBar from "./SideBar/SideBar"
const App = StackNavigator({
    Splash: { screen: Splash},
    ScreenFour: {screen: ScreenFour},
    ScreenFive: {screen: ScreenFive},
    ScreenSix: {screen:ScreenSix},
    ScreenSeven:{screen:ScreenSeven},
    ScreenEight:{screen:ScreenEight},
    Login:{screen:Login}

},{ headerMode: 'none' })

const HomeScreenRouter = DrawerNavigator(
    {   Splash: { screen: Splash,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
          })},
        ScreenFour: {screen: ScreenFour,
            navigationOptions: ({navigation}) => ({
                drawerLockMode: 'locked-closed'
              })},
        ScreenFive: {screen: ScreenFive,
            navigationOptions: ({navigation}) => ({
                drawerLockMode: 'locked-closed'
              })},
        ScreenSix: {screen:ScreenSix},
        ScreenSeven:{screen:ScreenSeven},
        ScreenEight:{screen:ScreenEight},
        Login:{screen:Login}
    },
    {
      contentComponent: props => <SideBar {...props}  />,
      drawerPosition:'right'
    }
  );
  export default HomeScreenRouter;
  
