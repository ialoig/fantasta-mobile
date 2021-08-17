import { useNavigation } from "@react-navigation/native"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Header } from "../../components"
import TeamList from "../../components/Team/TeamList"
import { Leagues } from "../../services"
import { commonStyle } from "../../styles"
import styles from "./styles"

function Team(props) {

	const { goBack } = useNavigation()

	const [teams, setTeams] = useState(null)
	const [league, setLeague] = useState(null)

	useEffect(() => {
		
		const league = Leagues.GetActiveLeague()
		setLeague(league)

		const teams = league.teams
		console.log("[Team - useEffect] - teams", teams)
		setTeams(teams)
		
	}, [])



	
	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			{			
				teams && league &&
				<TeamList
					teams={teams}
					league={league}
				/>
			}

			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="team" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>

		</View>
	)
}

Team.propTypes = {

}

export default Team

