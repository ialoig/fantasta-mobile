import { useNavigation } from "@react-navigation/native"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Header } from "../../components"
import TeamList from "../../components/Team/TeamList"
import { commonStyle } from "../../styles"
import styles from "./styles"

function Team({ league, update }) {

	const { goBack } = useNavigation()

	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			{			
				league &&
				<TeamList
					league={league}
					teams={league.teams}
					update={update}
				/>
			}

			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="teams" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>

		</View>
	)
}

Team.propTypes = {
	league: PropTypes.object.isRequired,
	update: PropTypes.number
}

export default Team

