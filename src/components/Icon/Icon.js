import PropTypes from "prop-types"
import React from "react"
import AccountIcon from "./svg/AccountIcon"
import BackIcon from "./svg/BackIcon"
import ConfirmIcon from "./svg/ConfirmIcon"
import CreateLeagueIcon from "./svg/CreateLeagueIcon"
import EmptyIcon from "./svg/EmptyIcon"
import ErrorIcon from "./svg/ErrorIcon"
import ForwardIcon from "./svg/ForwardIcon"
import JoinLeagueIcon from "./svg/JoinLeagueIcon"
import LeagueIcon from "./svg/LeagueIcon"
import MarketIcon from "./svg/MarketIcon"
import TeamIcon from "./svg/TeamIcon"


const IconType = {
	account: AccountIcon,
	back: BackIcon,
	confirm: ConfirmIcon,
	create_league: CreateLeagueIcon,
	error: ErrorIcon,
	forward: ForwardIcon,
	join_league: JoinLeagueIcon,
	league: LeagueIcon,
	market: MarketIcon,
	team: TeamIcon
}


function Icon({ name, ...props }) {

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

