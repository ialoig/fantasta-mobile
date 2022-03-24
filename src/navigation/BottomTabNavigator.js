
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { useEffect, useState } from "react"
import Icon from "../components/Icon/Icon"
import Dashboard from "../containers/Dashboard/Dashboard"
import Market from "../containers/Market/Market"
import PlayersContainer from "../containers/Players/PlayersContainer"
import Team from "../containers/Team/Team"
import { Leagues } from "../services"
import { MarketStatus } from "../services/market"
import { SocketManager } from "../services/socket"
import { colors } from "../styles"
import { bottomTabShadow, bottomTabStyle } from "./bottomTabNavigatorConfig"
import routes from "./routesNames"

const socket = SocketManager.getSocketInstance()
const ioClient = socket.ioClient
const Tab = createBottomTabNavigator()

function BottomTabNavigator() {

	console.log("HERE")

	/* MARKET OBJECT IN DATABASE
		_id
		leagueId
		open
		active
		onlineTeams
		teamTurn
		betHistory
		closedAt
		createdAt	
		updatedAt
	*/

	const market = MarketStatus.get()

	const [leagueOnlineTeams, setLeagueOnlineTeams] = useState()
	const [marketOpen, setMarketOpen] = useState(market && market.closedAt == null ? true : false)
	const [marketActive, setMarketActive] = useState(false)
	const [marketOnlineTeams, setMarketOnlineTeams] = useState([])
	const [marketTeamTurn, setMarketTeamTurn] = useState({})
	const [marketBetHistory, setMarketBetHistory] = useState([])
	const [marketJoined, setMarketJoined] = useState(false)

	// league props: get League from local Storage and update it when new event occurs
	const [league, setLeague] = useState(Leagues.getActiveLeague())
	const [update, setUpdate] = useState(0) // initialized to zero and incremented when league change

	let marketProps = { marketOpen, marketActive, marketOnlineTeams, marketTeamTurn, marketBetHistory, marketJoined }

	useEffect(() => {

		// TODO: Warning: Can't perform a React state update on an unmounted component.
		// ONE SOLUTION: https://github.com/facebook/react/issues/14369#issuecomment-468267798
		let didUnmount = false

		// ------- League events -------

		// New user joined the League (not used)
		// use case: force reload league data to see new user in Team page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_NEW, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}" (newUser=true). payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setLeagueOnlineTeams(payload)
				// fetch league data again
				console.log("[Socket] check if it's my team: ", payload)
				const random = Math.random()
				console.log("[Socket] updating league and forcing refresh with random:", random)
				Leagues.get(Leagues.getActiveLeague()._id)
				setLeague(Leagues.getActiveLeague())
				setUpdate(random)
			}
		})

		// Existing user joined the League (not used)
		// use case: tbd
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE, (payload) => {
			console.log(`[Socket] user joined league room "${socket.league_room}" (newUser=false). payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setLeagueOnlineTeams(payload)
			}
		})

		// Existing user left the league (not used)
		// use case: tdb
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left league room "${socket.league_room}". payload: ${JSON.stringify(payload)}`)
			setLeagueOnlineTeams(payload)
		})

		// Existing user deleted from the League (not used)
		// use case: force reload league data to not see the user in Team page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_DELETED, (payload) => {
			console.log(`[Socket] user deleted from league. payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setLeagueOnlineTeams(payload)
				// fetch league data again
				// TODO: read team from payload and if payload.team == my_team skip fetching league data otherwise call get league api
				console.log("[Socket] check if it's my team: ", payload)
				Leagues.get(Leagues.getActiveLeague()._id)
				setLeague(Leagues.getActiveLeague())
				const random = Math.random()
				setUpdate(random)
				console.log("[Socket] updating league and forcing refresh with random:", random)
			}
		})

		// Admin open the market (used)
		// Use case: show market as open
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.MARKET_OPEN, (payload) => {
			console.log(`[Socket] open market room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setMarketOpen(true)
				setMarketOnlineTeams(payload)
			}
		})

		// ------- Market events -------

		// Admin close the market (used) - fix bug on server
		// Use case: show market as closed
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.CLOSE, () => {
			console.log(`[Socket] close market room "${socket.market_room}".`)
			if (!didUnmount) {
				setMarketOpen(false)
				setMarketActive(false)
				setMarketOnlineTeams([])
				setMarketTeamTurn({})
				setMarketBetHistory([])
				setMarketJoined(false)
			}
		})

		// Existing user left the Market (only on disconnection)
		// use case: show online users in market waiting room
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setMarketOnlineTeams(payload)
				// TODO: when an other user from online becomes offline this message id not received if the mobile user did not join the market yet
			}
		})

		// Existing user joined the Market (used)
		// use case: show online users in market waiting room
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.USER_ONLINE, (payload) => {
			console.log(`[Socket] user join room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setMarketOnlineTeams(payload)
			}
		})

		// Admin start the Auction (used)
		// use case: set the market as active
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.ACTIVE, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}" is active. payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setMarketActive(true)
			}
		})

		// Event receiver immediately after SERVER.MARKET.START with player name's turn (not used)
		// use case: render market open depending on the player's turn
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.SEARCH, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
			if (!didUnmount) {
				setMarketTeamTurn(payload)
			}
		})

		// User placed a bet on the selected player (not used)
		// Use case: all other users will see Market Open Player Selected page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.FOOTBALL_PLAYER_SELECTED, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
		})

		// Event recevied 3 seconds after SERVER.MARKET.FOOTBALL_PLAYER_SELECTED (not used)
		// Use case: show Market Open Auction page
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.BET, (payload) => {
			console.log(`[Socket] market room "${socket.market_room}". payload: ${JSON.stringify(payload)}`)
		})

		// Admin paused the Market (not used)
		// Use case: tbd
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.PAUSE, () => {
			console.log(`[Socket] market room "${socket.market_room}" is paused`)
			if (!didUnmount) {
				setMarketActive(false)
			}
			// TODO: handle resume/start
		})

		return () => {
			didUnmount = true
			// disconnect from league room
			ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.LEAGUE.USER_OFFLINE, (response) => {
				console.log(`disconnecting from league room ... response status: ${response.status}`)
				console.log(`\terror? ${JSON.stringify(response.error, null, 2)}`)
				// TODO: check response OK from server
			})

			// Remove listeres to avoid multiple event received when join the second time
			ioClient.removeAllListeners()
		}
	},
	[])

	const createMarket = () => {
		console.log("[MarketCreate] opening market")

		// emit event Market is OPEN
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.LEAGUE.MARKET_OPEN, (response) => {
			console.log(`callbak.response.status: ${response.status}`)
			console.log(`callback.response.error: ${JSON.stringify(response.error, null, 2)}`)
			setMarketJoined(true)
		})
	}

	const joinMarketRoom = () => {
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.MARKET.USER_ONLINE, (response) => {
			console.log(`callbak.response.status: ${response.status}`)
			console.log(`callback.response.error: ${JSON.stringify(response.error, null, 2)}`)
			// TODO: check response OK from server
			setMarketJoined(true)
		})
	}


	return (
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
				options={{
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="teams_tab"
							primary={focused ? colors.primary : colors.grey}
							secondary={focused ? colors.secondary : colors.white} />
					}
				}}
			>
				{() => <Team
					league={league}
					update={update}
				/>
				}
			</Tab.Screen>

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
					{...marketProps}
					createMarket={createMarket}
					joinMarketRoom={joinMarketRoom} />
				}
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
	)
}

export default BottomTabNavigator
