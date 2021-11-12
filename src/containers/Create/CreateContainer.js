import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import routes from "../../navigation/routesNames"
import { Leagues } from "../../services"
import AuctionSettings from "./AuctionSettings"
import Create from "./Create"
import CreateLeague from "./CreateLeague"
import CreateTeam from "./CreateTeam"
import TeamSettings from "./TeamSettings"

const pages = [
	{ key: "1", component: CreateLeague, title: "createLeague", description: "" },
	{ key: "2", component: TeamSettings, title: "teamSettings", description: "" },
	{ key: "3", component: AuctionSettings, title: "auctionSettings", description: "" },
	{ key: "4", component: CreateTeam, title: "createTeam", description: "" }
]

export class CreateContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			pages,
			settings: {
				[FIELDS_ID.leagueNameId]: "",
				[FIELDS_ID.passwordId]: "",
				[FIELDS_ID.participantsId]: 8,
				[FIELDS_ID.tipologyId]: TIPOLOGY.CLASSIC,
				[FIELDS_ID.goalskeepersId]: 3,
				[FIELDS_ID.defendersId]: 8,
				[FIELDS_ID.midfieldersId]: 8,
				[FIELDS_ID.strikersId]: 6,
				[FIELDS_ID.playersId]: 22,
				[FIELDS_ID.budgetId]: 500,
				[FIELDS_ID.countdownId]: 60,
				[FIELDS_ID.auctiontypeId]: AUCTION_TYPE.RANDOM,
				[FIELDS_ID.startpriceId]: STARTING_PRICE.NONE,
				[FIELDS_ID.teamnameId]: ""
			},
			popupShow: false,
			popupTitle: I18n.translate("field_error"),
			popupMessage: ""
		}
	}

	// called when changing any of the fields in the slide
	onChange(id, value) {

		let settings = {
			[id]: value
		}

		this.setState({
			settings: Object.assign({}, this.state.settings, settings),
			popupShow: false,
			popupMessage: ""
		})
	}

	// called from PopupError.js once the popup is closed.
	// The popup state is following the props (see PopupError.js -> useEffect) therefore we need to change the state from outside to make changes
	popupClosedCallback() {
		this.setState({
			popupShow: false,
			popupMessage: ""
		})
	}

	validateCreateLeaguePage() {
		let ret = {
			isValid: true,
			errorMessage: ""
		}

		if (!this.state.settings[FIELDS_ID.leagueNameId]) {
			ret.errorMessage = "missing_league_name"
			ret.isValid = false
		}
		else if (!this.state.settings[FIELDS_ID.passwordId]) {
			ret.errorMessage = "missing_password"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.participantsId] < 2) {
			ret.errorMessage = "participants_error"
			ret.isValid = false
		}
		return ret
	}

	validateTeamSettingsPage() {
		let ret = {
			isValid: true,
			errorMessage: ""
		}

		if (this.state.settings[FIELDS_ID.goalskeepersId] < 1) {
			ret.errorMessage = "goalskeepers_error"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] < 3) {
			ret.errorMessage = "defenders_error"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.midfieldersId] < 3) {
			ret.errorMessage = "midfielders_error"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.strikersId] < 1) {
			ret.errorMessage = "forwarders_error"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] + this.state.settings[FIELDS_ID.midfieldersId] + this.state.settings[FIELDS_ID.strikersId] < 10) {
			ret.errorMessage = "players_error"
			ret.isValid = false
		}
		else if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA && this.state.settings[FIELDS_ID.playersId] < 10) {
			ret.errorMessage = "players_error"
			ret.isValid = false
		}
		return ret

	}

	validateAuctionSettingsPage() {
		let ret = {
			isValid: true,
			errorMessage: ""
		}

		if (this.state.settings[FIELDS_ID.countdownId] < 3) {
			ret.errorMessage = "countdown_error"
			ret.isValid = false
		}		
		return ret
	}

	validateCreateTeamPage() {
		let ret = {
			isValid: true,
			errorMessage: ""
		}

		if (!this.state.settings[FIELDS_ID.teamnameId]) {
			ret.errorMessage = "missing_team_name"
			ret.isValid = false
		}
		return ret

	}

	// Used to decide whether is possible to change slide (see Create.js -> onSlideChange)
	validatePage(page_index) {

		this.setState({
			popupShow: false,
			popupMessage: ""
		})
		switch (page_index) {
		case 0: {
			const validation_result = this.validateCreateLeaguePage()
			this.setState({
				popupShow: !validation_result.isValid,
				popupMessage: validation_result.errorMessage
			})
			return validation_result.isValid				
		}

		case 1: {
			const validation_result = this.validateTeamSettingsPage()
			this.setState({
				popupShow: !validation_result.isValid,
				popupMessage: validation_result.errorMessage
			})
			return validation_result.isValid
		}

		case 2: {
			const validation_result = this.validateAuctionSettingsPage()
			this.setState({
				popupShow: !validation_result.isValid,
				popupMessage: validation_result.errorMessage
			})
			return validation_result.isValid
		}

		case 3: {
			const validation_result = this.validateCreateTeamPage()
			this.setState({
				popupShow: !validation_result.isValid,
				popupMessage: validation_result.errorMessage
			})
			return validation_result.isValid
		}

		default:
			console.error(`[CreateContainer] No validation defined for page with index "${page_index}"`)
		}
	}

	async onDone() {
		if (this.validatePage(pages.length - 1)) {
			try {
				await Leagues.create(this.state.settings)
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			}
			catch (error) { /* error handling done in Leagues.create */ }
		}
	}

	render() {
		return (
			<Create
				leagueNameId={FIELDS_ID.leagueNameId}
				passwordId={FIELDS_ID.passwordId}
				participantsId={FIELDS_ID.participantsId}
				tipologyId={FIELDS_ID.tipologyId}
				goalskeepersId={FIELDS_ID.goalskeepersId}
				defendersId={FIELDS_ID.defendersId}
				midfieldersId={FIELDS_ID.midfieldersId}
				strikersId={FIELDS_ID.strikersId}
				playersId={FIELDS_ID.playersId}
				budgetId={FIELDS_ID.budgetId}
				countdownId={FIELDS_ID.countdownId}
				auctiontypeId={FIELDS_ID.auctiontypeId}
				startpriceId={FIELDS_ID.startpriceId}
				teamnameId={FIELDS_ID.teamnameId}
				tipology={TIPOLOGY}
				auctionType={AUCTION_TYPE}
				startingPrice={STARTING_PRICE}
				pages={pages}
				validatePage={this.validatePage.bind(this)}
				onChange={this.onChange.bind(this)}
				onDone={this.onDone.bind(this)}
				settings={this.state.settings}
				popupShow={this.state.popupShow}
				popupTitle={this.state.popupTitle}
				popupMessage={this.state.popupMessage}
				popupClosedCallback={this.popupClosedCallback.bind(this)}
			/>
		)
	}
}


CreateContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
