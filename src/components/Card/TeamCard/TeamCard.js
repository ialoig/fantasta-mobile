import PropTypes from "prop-types"
import React from "react"
import { Pressable, Text, View } from "react-native"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

const TeamCard = ({ name, budget, countsPerRole, maxPerRole, onPress }) => {


	return (
		<Pressable onPress={onPress} style={[card.card, size["small"], card["small"]]}>
			<Icon name="league" />
			<View style={styles.info}>
				<View style={styles.infoTeam}>
					<Text style={textStyles.h3}>{name}</Text>
					<Text style={textStyles.description}>{budget} fm</Text>
				</View>
				<View style={styles.infoRoles}>
					<Icon name="role" role="P" type="small" 
						completed={countsPerRole.P === maxPerRole.P} />
					<Text style={textStyles.description}>
						{countsPerRole.P ? countsPerRole.P : 0}/{maxPerRole.P}
					</Text>
					<Icon name="role" role="D" type="small" 
						completed={countsPerRole.D === maxPerRole.D} />
					<Text style={textStyles.description}>
						{countsPerRole.D ? countsPerRole.D : 0}/{maxPerRole.D}
					</Text>
					<Icon name="role" role="C" type="small" 
						completed={countsPerRole.C === maxPerRole.C} />
					<Text style={textStyles.description}>
						{countsPerRole.C ? countsPerRole.C : 0}/{maxPerRole.C}
					</Text>
					<Icon name="role" role="A" type="small" 
						completed={countsPerRole.A === maxPerRole.A} />
					<Text style={textStyles.description}>
						{countsPerRole.A ? countsPerRole.A : 0}/{maxPerRole.A}
					</Text>
				</View>
			</View>
		</Pressable>
	)
}

TeamCard.propTypes = {
	name: PropTypes.string.isRequired,
	budget: PropTypes.number,
	countsPerRole: PropTypes.object.isRequired,
	maxPerRole: PropTypes.object.isRequired,
	onPress: PropTypes.func
}

TeamCard.defaultProps = {
	countsPerRole: {
		"P": 0,
		"D": 0,
		"C": 0,
		"A": 0,
	},
	maxPerRole: {
		"P": 3,
		"D": 8,
		"C": 8,
		"A": 5,
	},
}

export default TeamCard