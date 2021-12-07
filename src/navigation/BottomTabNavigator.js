
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

	useEffect(() => {

		// League events
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_NEW, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}" (it's a NEW user). users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayersLeague(payload)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}". users online: ${payload}`)
			setOnlinePlayersLeague(payload)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left league room "${socket.league_room}". users online: ${payload}`)
			setOnlinePlayersLeague(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_DELETED, (payload) => {
			console.log(`[Socket] user deleted from league. users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayersLeague(payload)
		})

		// Market events
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.OPEN, (payload) => {
			console.log(`[Socket] open market room "${socket.market_room}". users online: ${payload}`)
			setMarketOpen(true)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.CLOSE, (payload) => {
			console.log(`[Socket] close market room "${socket.market_room}". users online: ${payload}`)
			setMarketOpen(false)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left room "${socket.market_room}". users online: ${payload}`)
			setOnlinePlayersMarket(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_ONLINE, (payload) => {
			console.log(`[Socket] user join room "${socket.market_room}". users online: ${payload}`)
			setOnlinePlayersMarket(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.START, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}"is started. users online: ${payload}`)
			setMarketStart(true)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.SEARCH, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". turn: ${payload.turn}`)
			setMarketTurnUser(payload)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.FOOTBALL_PLAYER_SELECTED, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". ${payload.user} selected football_player_id: ${payload.football_player_id}, bet: ${payload.bet}`)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.BET, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". ${payload.user} bet on football_player_id: ${payload.football_player_id}, bet: ${payload.bet}`)
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.PAUSE, () => {
			console.log(`[Socket] market room "${socket.market_room}" is paused`)
			setMarketPause(true)
			// TODO: handle resume/start
		})

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.CLOSE, () => {
			console.log(`[Socket] market room "${socket.market_room}" is closed`)
			setMarketStart(false)
		})

		return () => {
			console.log("onUnmount")
			// todo: disconnect from server socket
		}
	},
	[])

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
				{() => <Market marketOpen={marketOpen} />}
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
