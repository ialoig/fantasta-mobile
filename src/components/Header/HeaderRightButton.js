import { useNavigation } from "@react-navigation/core"
import PropTypes from "prop-types"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import routes from "../../navigation/routesNames"
import Icon from "../Icon/Icon"

function HeaderRightButton (props) {

	const { type } = props
	const { navigate } = useNavigation()
	

	const handlePress = () => {
		switch(type) {
		case "account":
			return navigate(routes.ACCOUNTNAVIGATOR)
		default:
			return
		}
	}

	return (
		<TouchableOpacity onPress={handlePress} >
			<Icon name={type} />
		</TouchableOpacity>
	)
}

export default HeaderRightButton


HeaderRightButton.propTypes = {
	type: PropTypes.string.isRequired
}

