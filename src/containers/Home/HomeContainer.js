import React from "react";

import Home from './Home'

export class HomeContainer extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {

    return (
      <Home />
    )
  }
}
