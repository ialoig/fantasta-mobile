
import React from "react"
import { Image } from "react-native"

import styles from "./styles"

const Logo = (props) => {

	let logo = require("../../../assets/img/logo.png")
    
	if ( props.type=="svg" )
	{
		logo = require("../../../assets/img/logo.svg")
	}
    
	return <Image style={styles.logo} source={logo} />
}

export default Logo
