import { useNavigation } from "@react-navigation/core"
import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import IconButton from "../IconButton/IconButton"

function HeaderRightButton ({ type, ...props }) {

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



