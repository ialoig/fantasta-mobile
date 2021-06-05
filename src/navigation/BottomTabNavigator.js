
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "../components/Icon/Icon"
import { DashboardContainer } from "../containers/Dashboard/DashboardContainer"
import Market from "../containers/Market/Market"
import PlayersContainer from "../containers/Players/PlayersContainer"
import Team from "../containers/Team/Team"
import { COLORS } from "../styles"
import { bottomTabShadow, bottomTabStyle } from "./bottomTabNavigatorConfig"
import routes from "./routesNames"



const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
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
				component={DashboardContainer}
				options={{ 
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="dashboard_tab" 
							primary={focused ? COLORS.primary : COLORS.grey} 
							secondary={focused ? COLORS.secondary : COLORS.white} />
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
							primary={focused ? COLORS.primary : COLORS.grey} 
							secondary={focused ? COLORS.secondary : COLORS.white} />
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
							primary={focused ? COLORS.primary : COLORS.grey} 
							secondary={focused ? COLORS.secondary : COLORS.white} />
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
							primary={focused ? COLORS.primary : COLORS.grey} 
							secondary={focused ? COLORS.secondary : COLORS.white} />
					}
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabNavigator
