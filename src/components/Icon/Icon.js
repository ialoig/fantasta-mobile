import PropTypes from "prop-types"
import React from "react"
import AccountIcon from "./svg/AccountIcon"
import BackIcon from "./svg/BackIcon"
import CreateLeagueIcon from "./svg/CreateLeagueIcon"
import EmptyIcon from "./svg/EmptyIcon"
import JoinLeagueIcon from "./svg/JoinLeagueIcon"
import LeagueIcon from "./svg/LeagueIcon"


const IconType = {
	account: AccountIcon,
	back: BackIcon,
	create_league: CreateLeagueIcon,
	join_league: JoinLeagueIcon,
	league: LeagueIcon
}


function Icon({name, ...props}) {

	const IconComponent = IconType[name] || EmptyIcon

	return (
		<IconComponent {...props} />
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired, //TODO: gl - definirlo come uno degli elementi di IconType
	color: PropTypes.string
}

export default Icon

