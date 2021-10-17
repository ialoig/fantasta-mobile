import PropTypes from "prop-types"
import React from "react"
import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import routes from "../../navigation/routesNames"
import Leagues from "../../services"
import AuctionSettings from "./AuctionSettings"
import Create from "./Create"
import CreateLeague from "./CreateLeague"
import CreateTeam from "./CreateTeam"
import TeamSettings from "./TeamSettings"
import View from "react-native"
import PopupModal from "../../components/Popup/PopupModal"

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
			popupTitle: "Input error",
			popupMessages: []
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
			popupMessages: []
		})
	}

	// called from PopupModal.js once the popup is closed.
	// The popup state is following the props (see PopupModal.js -> useEffect) therefore we need to change the state from outside to make changes
	popupClosedCallback() {
		this.setState({
			popupShow: false,
			popupMessages: []
		})
	}

	validateCreateLeaguePage() {
		let validFields = true
		let errors = []
		if (!this.state.settings[FIELDS_ID.leagueNameId]) {
			errors.push("missing_league_name")
			validFields = false
		}
		if (!this.state.settings[FIELDS_ID.passwordId]) {
			errors.push("missing_password")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.participantsId] < 2) {
			errors.push("participants_error")
			validFields = false
		}

		this.setState({
			popupShow: !validFields,
			popupMessages: errors
		})

		console.log(`[CreateContainer] errors: ${errors}`)
		return validFields
	}

	validateTeamSettingsPage() {
		let validFields = true
		let errors = []
		if (this.state.settings[FIELDS_ID.goalskeepersId] < 1) {
			errors.push("goalskeepers_error")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] < 3) {
			errors.push("defenders_error")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.midfieldersId] < 3) {
			errors.push("midfielders_error")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.strikersId] < 1) {
			errors.push("forwarders_error")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] + this.state.settings[FIELDS_ID.midfieldersId] + this.state.settings[FIELDS_ID.strikersId] < 10) {
			errors.push("players_error")
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA && this.state.settings[FIELDS_ID.playersId] < 10) {
			errors.push("players_error")
			validFields = false
		}

		this.setState({
			popupShow: !validFields,
			popupMessages: errors
		})

		console.log(`[CreateContainer] errors: ${errors}`)
		return validFields
	}

	validateAuctionSettingsPage() {
		let validFields = true
		let errors = []

		if (this.state.settings[FIELDS_ID.countdownId] < 3) {
			errors.push("countdown_error")
			validFields = false
		}

		this.setState({
			popupShow: !validFields,
			popupMessages: errors
		})

		console.log(`[CreateContainer] errors: ${errors}`)
		return validFields
	}

	validateCreateTeamPage() {
		let validFields = true
		let errors = []
		if (!this.state.settings[FIELDS_ID.teamnameId]) {
			errors.push("missing_team_name")
			validFields = false
		}

		this.setState({
			popupShow: !validFields,
			popupMessages: errors
		})

		console.log(`[CreateContainer] errors: ${errors}`)
		return validFields

	}

	// Used to decide whether is possible to change slide (see Create.js -> onSlideChange)
	validatePage(page_index) {
		console.log(`[CreateContainer] validatePage(page_index=${page_index})`)

		this.setState({
			popupShow: false,
			popupMessages: ""
		})
		switch (page_index) {
			case 0: return this.validateCreateLeaguePage()
			case 1: return this.validateTeamSettingsPage()
			case 2: return this.validateAuctionSettingsPage()
			case 3: return this.validateCreateTeamPage()
			default:
				console.log(`[CreateContainer] No validation defined for page with index "${page_index}"`)
		}
	}

	async onDone() {
		if (this.validatePage(pages.length - 1)) {
			try {
				await Leagues.Create(this.state.settings)
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			}
			catch (error) { /* error handling done in Leagues.Create */ }
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
					popupMessages={this.state.popupMessages}
					popupClosedCallback={this.popupClosedCallback.bind(this)}
				/>
		)
	}
}


CreateContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
