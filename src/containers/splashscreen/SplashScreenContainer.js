import React from "react";
import { Text, View } from "react-native";

import styles from './styles'

export default class SplashScreenContainer extends React.Component {

  static navigationOptions = {
      header: null
  }

  componentDidMount () {
    setTimeout(()=>{
      this.props.navigation.navigate( 'login' )
    }, 3000)
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{"SPLASHSCREEN\n\n\nFANTASTA"}</Text>

          {/* <SplashScreen text={"SPLASHSCREEN\n\n\nFANTASTA"} /> */}
        </View>
      </View>
    );
  }
}
