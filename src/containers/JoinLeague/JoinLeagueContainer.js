import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { FIELDS_ID } from "../../constants"
import routes from "../../navigation/routesNames"
import Leagues from "../../services"
import CreateTeam from "../CreateLeague/CreateTeam"
import JoinLeague from "./JoinLeague"
import JoinLeagueSlider from "./JoinLeagueSlider"
import { validateJoinLeaguePage, validateCreateTeamPage } from "../../utils/validation"

const pages = [
	{ key: "1", component: JoinLeague, title: "joinLeague", description: "" },
	{ key: "2", component: CreateTeam, title: "createTeam", description: "" }
]

export class JoinLeagueContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			pages,
			settings: {
				[FIELDS_ID.leagueNameId]: "",
				[FIELDS_ID.passwordId]: "",
				[FIELDS_ID.teamnameId]: "",
			},
			popupShow: false,
			popupTitle: I18n.translate("field_error"),
			popupMessage: ""
		}
	}

	// called when changing any of the fields in the slides
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

	// Used to decide whether is possible to change slide (see Create.js -> onSlideChange)
	validatePage(page_index) {

		this.setState({
			popupShow: false,
			popupMessage: ""
		})
		switch (page_index) {
			case 0: {
				const validation_result = validateJoinLeaguePage(this.state.settings[FIELDS_ID.leagueNameId], this.state.settings[FIELDS_ID.passwordId])
				this.setState({
					popupShow: !validation_result.isValid,
					popupMessage: validation_result.errorMessage
				})
				return validation_result.isValid
			}

			case 1: {
				const validation_result = validateCreateTeamPage(this.state.settings[FIELDS_ID.teamnameId])
				this.setState({
					popupShow: !validation_result.isValid,
					popupMessage: validation_result.errorMessage
				})
				return validation_result.isValid
			}

			default:
				console.error(`[JoinLeagueContainer] No validation defined for page with index "${page_index}"`)
		}
	}

	async onDone() {
		if (this.validatePage(pages.length - 1)) {
			try {
				await Leagues.Join("", this.state.settings[FIELDS_ID.leagueNameId], this.state.settings[FIELDS_ID.passwordId], this.state.settings[FIELDS_ID.teamnameId])
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			}
			catch (error) {/*error handling done in Leagues.Join*/ }
		}
	}

	render() {
		return (
			<JoinLeagueSlider
				leagueNameId={FIELDS_ID.leagueNameId}
				passwordId={FIELDS_ID.passwordId}
				teamnameId={FIELDS_ID.teamnameId}	
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


JoinLeagueContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}