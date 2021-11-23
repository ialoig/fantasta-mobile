
import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { Header } from "../../components"
import routes from "../../navigation/routesNames"
import { Leagues, Players, User } from "../../services"
import { SocketManager } from "../../services/socket"
import { commonStyle } from "../../styles"
import TeamDetails from "../Team/TeamDetails"

function Dashboard() {

	const ioClient = useContext(SocketManager.getSocketInstance().SocketContext)
	const { navigate, goBack } = useNavigation()

	const [league, setLeague] = useState(Leagues.getActiveLeague())
	const [team, setTeam] = useState(Leagues.getMyTeam(User.get().username))
	const [players, setPlayers] = useState([])
	const [onlinePlayers, setOnlinePlayers] = useState([])

	useEffect(() => {
		const apiLeague = Leagues.getActiveLeague()
		const myTeam = Leagues.getMyTeam(User.get().username)

		getRandomPlayers()

		//get players from api
		// const apiPlayers = Object.values(Players.getPlayers())

		// const players = team.footballPlayers
		// setPlayers(players)

		setTeam(myTeam)
		setLeague(apiLeague)

		// subscribe to socket League events
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_NEW, (payload) => {
			console.log(`[Dashboard - Socket] user joined room ${league.name} (it's a NEW user). users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayers(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE, (payload) => {
			console.log(`[Dashboard - Socket] user joined room ${league.name}. users online: ${payload}`)
			setOnlinePlayers(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE, (payload) => {
			console.log(`[Dashboard - Socket] user left room ${league.name}. users online: ${payload}`)
			setOnlinePlayers(payload)
		})

		console.log("[Dashboard - useEffect] - league=", league.name)
	}, [ioClient]) // Re-run useEffect when objects in this array have changed


	//TODO: to be deleted after calculation of players from team object
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max - min + 1) + min)
	}

	//TODO: just for debug purpose. Replace it with the right players object calculated from team object (ie. team.footballPlayers)
	const getRandomPlayers = () => {
		//get players from api
		const apiPlayers = Object.values(Players.getPlayers())

		const size = apiPlayers.length
		console.log("[Dashboard - getRandomPlayers] - size", size)
		const players = []
		const indexes = []
		for (let i = 0; i < randomNumberFromRange(10, 25); i++) {
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

			{/* it has been defined as last component because it have to be seen over the others */}
			<Header
				title="dashboard"
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack()}
				rightButton
				iconTypeRight="account"
				onPressRight={() => { navigate(routes.ACCOUNTNAVIGATOR) }}
			/>
		</>
	)
}

Dashboard.propTypes = {

}

export default Dashboard

