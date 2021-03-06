import PropTypes from "prop-types"
import React from "react"
import AccountIcon from "./svg/AccountIcon"
import BackIcon from "./svg/BackIcon"
import ConfirmIcon from "./svg/ConfirmIcon"
import CreateLeagueIcon from "./svg/CreateLeagueIcon"
import DashboardTabIcon from "./svg/DashboardTabIcon"
import EmptyIcon from "./svg/EmptyIcon"
import ErrorIcon from "./svg/ErrorIcon"
import FieldRoleIcon from "./svg/FieldRoleIcon"
import ForwardIcon from "./svg/ForwardIcon"
import JoinLeagueIcon from "./svg/JoinLeagueIcon"
import LeagueIcon from "./svg/LeagueIcon"
import MarketIcon from "./svg/MarketIcon"
import MarketTabIcon from "./svg/MarketTabIcon"
import PlayerRoleIcon from "./svg/PlayerRoleIcon"
import PlayersTabIcon from "./svg/PlayersTabIcon"
import SendIcon from "./svg/SendIcon"
import SeparatorIcon from "./svg/SeparatorIcon"
import TeamIcon from "./svg/TeamIcon"
import TeamsTabIcon from "./svg/TeamsTabIcon"
import TransferIcon from "./svg/TransferIcon"
import WaitingIcon from "./svg/WaitingIcon"


export const IconType = {
	account: AccountIcon,
	back: BackIcon,
	confirm: ConfirmIcon,
	create_league: CreateLeagueIcon,
	error: ErrorIcon,
	send: SendIcon,
	forward: ForwardIcon,
	join_league: JoinLeagueIcon,
	league: LeagueIcon,
	market: MarketIcon,
	team: TeamIcon,
	dashboard_tab: DashboardTabIcon,
	teams_tab: TeamsTabIcon,
	market_tab: MarketTabIcon,
	players_tab: PlayersTabIcon,
	role: PlayerRoleIcon,
	separator: SeparatorIcon,
	field_role: FieldRoleIcon,
	transfer: TransferIcon,
	waiting: WaitingIcon
}


function Icon({ name, ...props }) {

	const IconComponent = IconType[name] || EmptyIcon

	return (
		<IconComponent {...props} />
	)
}

Icon.propTypes = {
	name: PropTypes.oneOf([...Object.keys(IconType)]).isRequired,
	color: PropTypes.string
}

export default Icon

