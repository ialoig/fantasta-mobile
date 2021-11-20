
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "../components/Icon/Icon"
import Dashboard from "../containers/Dashboard/Dashboard"
import Market from "../containers/Market/Market"
import PlayersContainer from "../containers/Players/PlayersContainer"
import Team from "../containers/Team/Team"
import { SocketManager } from "../services/socket"
import { colors } from "../styles"
import { bottomTabShadow, bottomTabStyle } from "./bottomTabNavigatorConfig"
import routes from "./routesNames"



const Tab = createBottomTabNavigator()
const socket = SocketManager.getSocketInstance()

function BottomTabNavigator() {
	return (
		<socket.SocketContext.Provider value={socket.ioClient}>
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
					component={Market}
					options={{ 
					// eslint-disable-next-line react/display-name
						tabBarIcon: ({ focused }) => {
							return <Icon
								name="market_tab" 
								primary={focused ? colors.primary : colors.grey} 
								secondary={focused ? colors.secondary : colors.white} />
						}
					}}
				/>
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
		</socket.SocketContext.Provider>
	)
}

export default BottomTabNavigator
