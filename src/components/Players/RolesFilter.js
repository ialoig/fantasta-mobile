import PropTypes from "prop-types"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { Badge } from ".."
import styles from "./styles"


function RolesFilter({ roles, onPress, isActive }) {
	return (
		<Animated.View style={styles.badges}>
			<ScrollView 
				bounces
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{
					roles && Object.entries(roles).map(([key, value]) => {
						return (
							<Badge 
								key={key}
								onPress={() => onPress(key)}
								title={value}
								active={isActive(key)}
							/>
						)
					})
				}
			</ScrollView>
		</Animated.View>
	)
}

RolesFilter.propTypes = {
	roles: PropTypes.object,
	onPress: PropTypes.func,
	isActive: PropTypes.func
}

export default RolesFilter

