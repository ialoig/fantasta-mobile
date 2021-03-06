import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import { Leagues } from "../../services"
import { SocketManager } from "../../services/socket"
import Home from "./Home"

export class HomeContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			leagues: Leagues.getLeagues().sort((a, b) => a.name > b.name ? 1 : -1)
		}
	}

	componentDidMount() {
		this.mounted = true
		this.props.navigation.addListener(
			"focus",
			() => {
				this.mounted && this.setState({
					//ordered by creation date, last created on first position
					leagues: Leagues.getLeagues().sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
				})
			}
		)
	}

	componentWillUnmount() {
		this.mounted = false
	}

	async joinLeague(item) {
		if (item && item._id) {
			const league_id = await Leagues.join(item._id)
			
			// join Socket room
			SocketManager.getSocketInstance().joinRoom(league_id, false)
			
			this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
		}
	}

	render() {
		return (
			<Home
				{...this.props}
				leagues={this.state.leagues}
				crea={() => this.props.navigation.navigate(routes.CREATE_LEAGUE_LEAGUE_SETTINGS)}
				join={() => this.props.navigation.navigate(routes.JOIN_LEAGUE)}
				account={() => this.props.navigation.navigate(routes.ACCOUNTNAVIGATOR)}
				joinLeague={this.joinLeague.bind(this)}
			/>
		)
	}

}


HomeContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
