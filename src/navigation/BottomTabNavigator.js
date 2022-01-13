
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { useEffect, useState } from "react"
import Icon from "../components/Icon/Icon"
import Dashboard from "../containers/Dashboard/Dashboard"
import Market from "../containers/Market/Market"
import PlayersContainer from "../containers/Players/PlayersContainer"
import Team from "../containers/Team/Team"
import { SocketManager } from "../services/socket"
import { colors } from "../styles"
import { bottomTabShadow, bottomTabStyle } from "./bottomTabNavigatorConfig"
import routes from "./routesNames"

const socket = SocketManager.getSocketInstance()
const ioClient = socket.ioClient
const Tab = createBottomTabNavigator()

function BottomTabNavigator() {

	const [onlinePlayersLeague, setOnlinePlayersLeague] = useState([])
	const [onlinePlayersMarket, setOnlinePlayersMarket] = useState([])

	const [marketOpen, setMarketOpen] = useState(false)
	const [marketStart, setMarketStart] = useState(false)
	const [marketPause, setMarketPause] = useState(false)
	const [marketTurnUser, setMarketTurnUser] = useState(false)

	const [marketJoined, setMarketJoined] = useState(false)

	useEffect(() => {

		// ------- League events -------
		// New user joined the League (not used)
		// use case: force reload league data to see new user in Team page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_NEW, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}" (it's a NEW user). users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayersLeague(payload)
		})
	
		// Existing user joined the League (not used)
		// use case: tbd
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}". users online: ${payload}`)
			setOnlinePlayersLeague(payload)
		})
	
		// Existing user left the league (not used)
		// use case: tdb
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left league room "${socket.league_room}". users online: ${payload}`)
			setOnlinePlayersLeague(payload)
		})

		// Existing user deleted from the League (not used)
		// use case: force reload league data to not see the user in Team page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_DELETED, (payload) => {
			console.log(`[Socket] user deleted from league. users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayersLeague(payload)
		})

		// ------- Market events -------
		// Admin open the market (used)
		// Use case: show market as open
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.OPEN, (payload) => {
			console.log(`[Socket] open market room "${socket.market_room}". users online: ${payload}`)
			setMarketOpen(true)
		})

		// Admin close the market (used) - fix bug on server
		// Use case: show market as closed
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.CLOSE, (payload) => {
			console.log(`[Socket] close market room "${socket.market_room}". users online: ${payload}`)
			setMarketOpen(false)
			setMarketStart(false)
		})

		// Existing user left the Market (only on disconnection)
		// use case: show online users in market waiting room
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left room "${socket.market_room}". users online: ${payload}`)
			setOnlinePlayersMarket(payload)
		})

		// Existing user joined the Market (used)
		// use case: show online users in market waiting room
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_ONLINE, (payload) => {
			console.log(`[Socket] user join room "${socket.market_room}". users online: ${payload}`)
			setOnlinePlayersMarket(payload)
		})

		// Admin start the Auction (used)
		// use case: set the market as started
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.START, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}"is started. users online: ${payload}`)
			setMarketStart(true)
		})

		// Event receiver immediately after SERVER.MARKET.START with player name's turn (not used)
		// use case: render market open depending on the player's turn
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.SEARCH, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". turn: ${payload.turn}`)
			setMarketTurnUser(payload)
		})

		// User placed a bet on the selected player (not used)
		// Use case: all other users will see Market Open Player Selected page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.FOOTBALL_PLAYER_SELECTED, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". ${payload.user} selected football_player_id: ${payload.football_player_id}, bet: ${payload.bet}`)
		})

		// Event recevied 3 seconds after SERVER.MARKET.FOOTBALL_PLAYER_SELECTED (not used)
		// Use case: show Market Open Auction page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.BET, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". ${payload.user} bet on football_player_id: ${payload.football_player_id}, bet: ${payload.bet}`)
		})

		// Admin paused the Market (not used)
		// Use case: tbd
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.PAUSE, () => {
			console.log(`[Socket] market room "${socket.market_room}" is paused`)
			setMarketPause(true)
			// TODO: handle resume/start
		})

		return () => {
			console.log("onUnmount")
			// todo: disconnect from server socket
		}
	},
	[])

	const joinMarketRoom = () => {
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.MARKET.USER_ONLINE, (response) => {
			console.log(`callbak.response.status: ${response.status}`)
			console.log(`callback.response.error: ${JSON.stringify(response.error, null, 2)}`)
			// TODO: check response OK from server
			setMarketJoined(true)
		})
	}

	return (
		// <socket.SocketContext.Provider value={socket.ioClient}>
		<Tab.Navigator
			initialRouteName={routes.DASHBOARD}
			backBehavior="none"
			tabBarOptions={{
				showLabel: false,
				style: {
					...bottomTabStyle,
					...bottomTabShadow
				},
				keyboardHidesTabBar: true
			}}
		>
			<Tab.Screen
				name={routes.DASHBOARD}
				component={Dashboard}
				options={{
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="dashboard_tab"
							primary={focused ? colors.primary : colors.grey}
							secondary={focused ? colors.secondary : colors.white} />
					}
				}}
			/>
			<Tab.Screen
				name={routes.TEAM}
				component={Team}
				options={{
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="teams_tab"
							primary={focused ? colors.primary : colors.grey}
							secondary={focused ? colors.secondary : colors.white} />
					}
				}}
			/>

			<Tab.Screen
				name={routes.MARKET}
				options={{
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="market_tab"
							primary={focused ? colors.primary : colors.grey}
							secondary={focused ? colors.secondary : colors.white} />
					}
				}}
			>
				{() => <Market 
					marketOpen={marketOpen} 
					marketJoined={marketJoined}
					joinMarketRoom={joinMarketRoom} 
					onlinePlayersMarket={onlinePlayersMarket}
					marketStart={marketStart}
					marketTurnUser={marketTurnUser.turn}
				/>}
			</Tab.Screen>

			<Tab.Screen
				name={routes.PLAYERS}
				component={PlayersContainer}
				options={{
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="players_tab"
							primary={focused ? colors.primary : colors.grey}
							secondary={focused ? colors.secondary : colors.white} />
					}
				}}
			/>
		</Tab.Navigator>
		// </socket.SocketContext.Provider>
	)
}

export default BottomTabNavigator
