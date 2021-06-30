import { useNavigation } from "@react-navigation/core"
import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import IconButton from "../IconButton/IconButton"

function HeaderRightButton ({ type, ...props }) {

	const { navigate, goBack } = useNavigation()
	

	const handlePress = () => {
		if (type === undefined)
			type = "back"
		switch(type) {
		case "account":
			return navigate(routes.ACCOUNTNAVIGATOR)
		default:
			return goBack()
		}
	}

	return (
		<IconButton 
			onPress={handlePress} 
			icon 
			type={type} 
			width={35} 
			height={35} 
			{...props} 
		/>
	)
}

HeaderRightButton.propTypes = {
	type: PropTypes.string.isRequired,
}


export default HeaderRightButton



