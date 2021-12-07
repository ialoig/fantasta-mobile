
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

	const [marketOpen, setMarketOpen] = useState(false)
	const [onlinePlayers, setOnlinePlayers] = useState([])
	
	useEffect(() => {

		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_NEW, (payload) => {
			console.log(`[Socket] user joined room (it's a NEW user). users online: ${payload}`)
			//TODO: fetch league data again
			setOnlinePlayers(payload)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE, (payload) => {
			console.log(`[Socket] user joined room. users online: ${payload}`)
			setOnlinePlayers(payload)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE, (payload) => {
			console.log(`[Socket] user left room. users online: ${payload}`)
			setOnlinePlayers(payload)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.OPEN, (payload) => {
			console.log(`[Socket] open market. users online: ${payload}`)
			setMarketOpen(true)
		})
	
		ioClient.on(SocketManager.EVENT_TYPE.SERVER.MARKET.CLOSE, (payload) => {
			console.log(`[Socket] open market. users online: ${payload}`)
			setMarketOpen(false)
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
