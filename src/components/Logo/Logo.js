import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { LogoHorizontal } from "./LogoHorizontal"
import { LogoVertical } from "./LogoVertical"

import styles from "./styles"



const Logo = ({ horizontal, ...props }) => {

	return (
		<View style={styles.center} >
			{horizontal ? <LogoHorizontal {...props} /> : <LogoVertical {...props}/> }
		</View>
	)
}


Logo.propTypes = {
	horizontal: PropTypes.bool
}

Logo.defaultProps = {
	horizontal: false
}

export default Logo

