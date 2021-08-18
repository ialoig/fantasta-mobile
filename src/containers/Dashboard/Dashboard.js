
import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Header } from "../../components"
import routes from "../../navigation/routesNames"
import { Leagues, Players, User } from "../../services"
import { commonStyle } from "../../styles"
import TeamDetails from "../Team/TeamDetails"


function Dashboard() {

	const { navigate, goBack } = useNavigation()
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [team, setTeam] = useState(Leagues.GetMyTeam(User.Get().username))
	const [players, setPlayers] = useState([])


	useEffect(() => {
		const apiLeague = Leagues.GetActiveLeague()
		const myTeam = Leagues.GetMyTeam(User.Get().username)

		getRandomPlayers()

		//get players from api
		// const apiPlayers = Object.values(Players.GetPlayers())

		// const players = team.footballPlayers
		// setPlayers(players)

		setTeam(myTeam)
		setLeague(apiLeague)
		console.log("[Dashboard - useEffect] - league=", league.name)
	}, [])


	//TODO: to be deleted after calculation of players from team object
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max-min+1) + min )
	}

	//TODO: just for debug, replace with the correct players calculated from team object (ie. team.footballPlayers)
	const getRandomPlayers = () => {
		//get players from api
		const apiPlayers = Object.values(Players.GetPlayers())
		
		const size = apiPlayers.length
		console.log("[Dashboard - getRandomPlayers] - size", size)
		const players = []
		const indexes = []
		for (let i = 0; i<randomNumberFromRange(10, 25); i++) {
			const random = Math.random()
			const randomIndex = Math.round(random * size)
			if (indexes.find(item => item === randomIndex)) {
				continue
			} else {
				indexes.push(randomIndex)
			}
			
			players.push(apiPlayers[randomIndex])
		}
		setPlayers(players)
	}


	return (
		<>
			<TeamDetails 
				teamID={team._id}
				style={commonStyle.paddingHeader}
			/>

			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="dashboard" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={ () => goBack() }
				rightButton
				iconTypeRight="account"
				onPressRight={ () => { navigate(routes.ACCOUNTNAVIGATOR) } }
			/>
		</>
	)
}

Dashboard.propTypes = {

}

export default Dashboard

