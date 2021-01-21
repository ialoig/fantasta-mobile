
import React from "react";
import { Image } from "react-native";

import styles from './styles'

const Logo = (props) => {

    let size = props.size==2 || props.size==3 ? `@${props.size}x` : ''
    let logo = require(`../../../assets/img/logo${size}.svg`)
    
    return <Image style={styles.logo} source={logo} />
}

export default Logo
