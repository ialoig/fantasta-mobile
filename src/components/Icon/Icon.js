import PropTypes from "prop-types"
import React from "react"
import AccountIcon from "./svg/AccountIcon"
import BackIcon from "./svg/BackIcon"
import CreateLeagueIcon from "./svg/CreateLeagueIcon"


const IconType = {
	account: AccountIcon,
	back: BackIcon,
	create_league: CreateLeagueIcon
}


function Icon({name, color, ...props}) {

	const IconComponent = IconType[name]

	return (
		<IconComponent 
			{...props}
			color={color} 
		/>
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired, //TODO: gl - definirlo come uno degli elementi di IconType
	color: PropTypes.string
}

export default Icon

