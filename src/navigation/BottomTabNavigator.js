
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Platform, StyleSheet } from "react-native"
import Icon from "../components/Icon/Icon"
import { DashboardContainer } from "../containers/Dashboard/DashboardContainer"
import Market from "../containers/Market/Market"
import PlayersContainer from "../containers/Players/PlayersContainer"
import Team from "../containers/Team/Team"
import colors from "../styles/colors"
import { dynamicHeight } from "../utils/pixelResolver"
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
					position: "absolute",
					height: dynamicHeight(375, 84),
					borderTopWidth: 0,
					borderTopLeftRadius: 32,
					borderTopRightRadius: 32,
					backgroundColor: colors.background,
					...shadow
				}
			}}
		>
			<Tab.Screen 
				name={routes.DASHBOARD}
				component={DashboardContainer}
				options={{ 
					// eslint-disable-next-line react/display-name
					tabBarIcon: ({ focused }) => {
						return <Icon
							name="home_tab" 
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
	)
}

export default BottomTabNavigator



const shadow = StyleSheet.create({
	...Platform.select({
		android: {
			elevation: 15
		},
		ios: {
			shadowOpacity: 0.06,
			shadowRadius: 4,
			shadowOffset: {
				width: 0,
				height: StyleSheet.hairlineWidth
			}
		},
		default: {
			borderBottomWidth: StyleSheet.hairlineWidth
		}
	})
})