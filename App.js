import React from "react";
import Routes from './src/Routes.js';
import * as Font from "expo-font";
import * as T from './src/languages';
import { AppLoading } from "expo";
import { SplashScreenContainer } from "./src/containers/splashscreen/SplashScreenContainer.js";

export default class App extends React.Component {

   state = {
      loaded: false
   }

   loadFonts = async () => {
      let isLoaded = await Font.loadAsync({
         PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
         PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
         PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
         PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf")
      })
      this.setState({
         loaded: isLoaded
      })
   }

   componentDidMount() {
      this.loadFonts();
   }
   

   render() {
      //TODO: da verificare se is lodaded è true
      return (<Routes/>)
   }
}
