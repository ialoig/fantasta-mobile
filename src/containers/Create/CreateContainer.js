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
			},
			errors: {
				[FIELDS_ID.leagueNameId]: "",
				[FIELDS_ID.passwordId]: "",
				[FIELDS_ID.participantsId]: "",
				[FIELDS_ID.goalskeepersId]: "",
				[FIELDS_ID.defendersId]: "",
				[FIELDS_ID.midfieldersId]: "",
				[FIELDS_ID.strikersId]: "",
				[FIELDS_ID.playersId]: "",
				[FIELDS_ID.countdownId]: "",
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
		let validFields = true
		let new_errors = {
			[FIELDS_ID.leagueNameId]: "",
			[FIELDS_ID.passwordId]: "",
			[FIELDS_ID.participantsId]: ""
		}
		if (!this.state.settings[FIELDS_ID.leagueNameId]) {
			new_errors[FIELDS_ID.leagueNameId] = "missing_league_name"
			validFields = false
		}
		if (!this.state.settings[FIELDS_ID.passwordId]) {
			new_errors[FIELDS_ID.passwordId] = "missing_password"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.participantsId] < 2) {
			new_errors[FIELDS_ID.participantsId] = "participants_error"
			validFields = false
		}

		this.setState({
			errors: Object.assign({}, this.state.errors, new_errors)
		})

		console.log(`new_errors: ${JSON.stringify(new_errors, null, 2)}`)
		return validFields
	}

	validate_teamSettings() {
		let validFields = true
		let new_errors = {
			[FIELDS_ID.goalskeepersId]: "",
			[FIELDS_ID.defendersId]: "",
			[FIELDS_ID.midfieldersId]: "",
			[FIELDS_ID.strikersId]: "",
			[FIELDS_ID.playersId]: ""
		}
		if (this.state.settings[FIELDS_ID.goalskeepersId] < 1) {
			new_errors[FIELDS_ID.goalskeepersId] = "goalskeepers_error"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] < 3) {
			new_errors[FIELDS_ID.defendersId] = "defenders_error"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.midfieldersId] < 3) {
			new_errors[FIELDS_ID.midfieldersId] = "midfielders_error"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.strikersId] < 1) {
			new_errors[FIELDS_ID.strikersId] = "forwarders_error"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && this.state.settings[FIELDS_ID.defendersId] + this.state.settings[FIELDS_ID.midfieldersId] + this.state.settings[FIELDS_ID.strikersId] < 10) {
			new_errors[FIELDS_ID.strikersId] = "players_error"
			validFields = false
		}
		if (this.state.settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA && this.state.settings[FIELDS_ID.playersId] < 10) {
			new_errors[FIELDS_ID.playersId] = "players_error"
			validFields = false
		}

		this.setState({
			errors: Object.assign({}, this.state.errors, new_errors)
		})

		console.log(`new_errors: ${JSON.stringify(new_errors, null, 2)}`)
		return validFields
	}

	validate_auctionSettings() {
		let validFields = true
		let new_errors = {
			[FIELDS_ID.countdownId]: ""
		}

		if (this.state.settings[FIELDS_ID.countdownId] < 3) {
			new_errors[FIELDS_ID.countdownId] = "countdown_error"
			validFields = false
		}

		this.setState({
			errors: Object.assign({}, this.state.errors, new_errors)
		})

		console.log(`new_errors: ${JSON.stringify(new_errors, null, 2)}`)
		return validFields
	}

	validate_createTeam() {
		let validFields = true
		let new_errors = {
			[FIELDS_ID.teamnameId]: ""
		}
		if (!this.state.settings[FIELDS_ID.teamnameId]) {
			new_errors[FIELDS_ID.teamnameId] = "missing_team_name"
			validFields = false
		}

		this.setState({
			errors: Object.assign({}, this.state.errors, new_errors)
		})

		console.log(`new_errors: ${JSON.stringify(new_errors, null, 2)}`)
		return validFields

	}

	validate_page(page_index) {
		console.log(`validate_page(page_index=${page_index})`)
		switch (page_index) {
			case 0: return this.validate_createLeague()
			case 1: return this.validate_teamSettings()
			case 2: return this.validate_auctionSettings()
			case 3: return this.validate_createTeam()
			default:
				console.log(`No validation defined for page with index "${page_index}"`)
		}
	}

	async onDone() {
		if (this.validate_page(pages.length - 1)) {
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
				onChange={this.onChange.bind(this)}
				onDone={this.onDone.bind(this)}
				settings={this.state.settings}
				errors={this.state.errors}
			/>
		)
	}
}


CreateContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
