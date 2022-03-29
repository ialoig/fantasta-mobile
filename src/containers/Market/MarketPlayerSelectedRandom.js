import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Button } from "../../components"
import AnimatedIcon from "../../components/Icon/AnimatedIcon"
import useAdmin from "../../hooks/useAdmin"
import { SocketManager } from "../../services/socket"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

function MarketPlayerSelectedRandom() {

	// get if you are Admin of the League
	const isAdmin = useAdmin()
	const [role, setRole] = useState("P")

	useEffect(() => {
		let interval = setInterval( () => {
			const roles = ["P", "D", "C", "A"]
			const index = Math.round(Math.random() * (roles.length-1) )
			setRole(roles[index])
		}, 4000)

		//cleanup the interval on complete
		//if we unmount the component before clearInterval is called, there is a memory leak because 
		//the interval is set when we start and the timer is not stopped.
		return () => clearInterval(interval)
	}, [])
	


	const shafflePlayer = () => {
		console.log("[MarketPlayerSelectedRandom] [shaffle] shaffle player ...")

		// const socket = SocketManager.getSocketInstance()
		// const ioClient = socket.ioClient

		// const payload = ""

		// ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.MARKET.FOOTBALL_PLAYER_SELECTED, payload, (response) => {
		// 	console.log("[MarketMyTurnPlayerSelected] [bet] status: %s", response.status)
		// 	console.log("[MarketMyTurnPlayerSelected] [bet] error?: %s", JSON.stringify(response.error))
		// 	// TODO: check response OK from server
		// })
	}

	const AdminShafflePage = () => {
		return (
			<>
				<View style={styles.image} >
					<AnimatedIcon 
						name="role" 
						role={role} 
						width={120} 
						height={120}
						animation={"opacity"} 
						duration={2000} 
						delay={0} 
						numOfReps={-1} />
					<Text style={textStyles.h2}>
						{I18n.translate("shaffle")}
					</Text>
					<Text style={[textStyles.h3, styles.textDescription]}>
						{I18n.translate("shaffle_descr")}
					</Text>
				</View>

				{/* button Shaffle Player is shown only for admin */}
				{
					
					<View style={styles.buttonOverlay}>
						<Button
							title={I18n.translate("shaffle")}
							onPress={() => shafflePlayer()}
							type={"primary"}
							size={"large"}
						/>
					</View>
				}
			</>
		)
	}

	const WaitingSelectionPage = () => {
		return (
			<>
				<View style={styles.image} >
					<AnimatedIcon 
						name="role" 
						role={role} 
						width={120} 
						height={120}
						animation={"opacity"} 
						duration={2000} 
						delay={0} 
						numOfReps={-1} />
					<Text style={[textStyles.h3, styles.textDescription]}>
						{I18n.translate("waiting_shaffle_descr")}
					</Text>
				</View>
			</>
		)
	}

	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			{/* Admin shaffle page */}
			{
				isAdmin && <AdminShafflePage />
			}

			{/* Waiting page for basic users */}
			{
				!isAdmin && <WaitingSelectionPage />
			}
		</View>
	)
}

MarketPlayerSelectedRandom.propTypes = {
}

export default MarketPlayerSelectedRandom

