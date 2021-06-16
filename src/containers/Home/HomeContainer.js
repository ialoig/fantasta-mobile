import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import { Leagues } from "../../services"
import Home from "./Home"

export class HomeContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			leagues: Leagues.GetLeagues().sort((a, b) => a.name > b.name ? 1 : -1)
		}
	}

	componentDidMount() {
		this.mounted = true
		this.props.navigation.addListener(
			"focus",
			() => {
				this.mounted && this.setState({
					leagues: Leagues.GetLeagues().sort((a, b) => a.name > b.name ? 1 : -1)
				})
			}
		)
	}

	componentWillUnmount() {
		this.mounted = false
	}

	async joinLeague(item) {
		if (item && item._id) {
			try {
				await Leagues.Join(item._id)
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			}
			catch (error) {/*error handling done in Leagues.Join*/ }
		}
	}

	render() {
		return (
			<Home
				{...this.props}
				leagues={this.state.leagues}
				crea={() => this.props.navigation.navigate(routes.CREATE_LEAGUE)}
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