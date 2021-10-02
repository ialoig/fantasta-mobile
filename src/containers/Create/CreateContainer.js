import PropTypes from "prop-types"
import React from "react"
import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import routes from "../../navigation/routesNames"
import { Error, Leagues } from "../../services"
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
			}
		}
	}

	// called when changing any of the fields in the slide
	onChange(id, value) {

		let settings = {
			[id]: value
		}

		this.setState({
			settings: Object.assign({}, this.state.settings, settings)
		})
	}

	validate_createLeague() {
		if (!this.state.settings[FIELDS_ID.leagueNameId]) {
			Error.showAlert("field_error", "missing_league_name") // todo: no alert but show message
			return false
		}
		if (!this.state.settings[FIELDS_ID.passwordId]) {
			Error.showAlert("field_error", "missing_password")
			return false
		}
		if (this.state.settings[FIELDS_ID.participantsId] < 2) {
			Error.showAlert("field_error", "participants_error")
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] < 3) {
			Error.showAlert("field_error", "defenders_error")
			return false
		}
		return true
	}

	validate_teamSettings() {
		if (this.state.settings[FIELDS_ID.goalskeepersId] < 1) {
			Error.showAlert("field_error", "goalskeepers_error")
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] < 3) {
			Error.showAlert("field_error", "defenders_error")
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.midfieldersId] < 3) {
			Error.showAlert("field_error", "midfielders_error")
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.strikersId] < 1) {
			Error.showAlert("field_error", "forwarders_error")
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] + this.state.settings[FIELDS_ID.midfieldersId] + this.state.settings[FIELDS_ID.strikersId] < 10) {
			Error.showAlert("field_error", "players_error") // todo: maybe a better error?
			return false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA && this.state.settings[FIELDS_ID.playersId] < 10) {
			Error.showAlert("field_error", "players_error")
			return false
		}
		return true
	 }

	validate_auctionSettings() { 
		if (this.state.settings[FIELDS_ID.countdownId] < 3) {
			Error.showAlert("field_error", "countdown_error")
			return false
		}
		return true
	}

	validate_createTeam() { 
		if (!this.state.settings[FIELDS_ID.teamnameId]) {
			Error.showAlert("field_error", "missing_team_name")
			return false
		}
		return true
	}

	validate_page(page_index) {
		let validate_page_result = true
		switch (page_index) {
			case 0:
				return this.validate_createLeague()
			case 1:
				return this.validate_teamSettings()
			case 2:
				return this.validate_auctionSettings()
			case 3:
				return this.validate_createTeam()
			default:
				console.log(`page_index: ${page_index}. No validation defined for page "${pages[page_index].title}"`)
		}
		return validate_page_result
	}

	async onDone() {
		if (this.validate_page(pages.length - 1)){
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
				validate_page={this.validate_page.bind(this)}
				settings={this.state.settings}
				onChange={this.onChange.bind(this)}
				onDone={this.onDone.bind(this)}
			/>
		)
	}
}


CreateContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
