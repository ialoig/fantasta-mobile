import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { NumberInc } from "../../components"
import { commonStyle } from "../../styles"

const TeamSettings = (props) => {
	return (
		<View style={commonStyle.flex}>
			<NumberInc
				label={I18n.translate("nGoalkeepers")}
				value={props.settings[props.goalskeepersId]}
				step={1}
				min={1}
				onChange={value => props.onChange(props.goalskeepersId, value)}
			/>
			{
				props.settings[props.tipologyId] == props.tipology.CLASSIC ?
					<View>
						<NumberInc
							label={I18n.translate("nDefenders")}
							value={props.settings[props.defendersId]}
							step={1}
							min={3}
							onChange={value => props.onChange(props.defendersId, value)}
						/>
						<NumberInc
							label={I18n.translate("nMidfielders")}
							value={props.settings[props.midfieldersId]}
							step={1}
							min={3}
							onChange={value => props.onChange(props.midfieldersId, value)}
						/>
						<NumberInc
							label={I18n.translate("nStrikers")}
							value={props.settings[props.strikersId]}
							step={1}
							min={1}
							onChange={value => props.onChange(props.strikersId, value)}
						/>
					</View> : null
			}
			{
				props.settings[props.tipologyId] == props.tipology.MANTRA ?
					<NumberInc
						label={I18n.translate("nPlayers")}
						value={props.settings[props.playersId]}
						step={1}
						min={10}
						onChange={value => props.onChange(props.playersId, value)}
					/> : null
			}
			<NumberInc
				label={I18n.translate("startingBudget")}
				value={props.settings[props.budgetId]}
				step={10}
				min={11} // todo: mi fa scendere fino a 10 anche se poi manda 11
				onChange={value => props.onChange(props.budgetId, value)}
			/>
		</View>
	)
}


TeamSettings.propTypes = {
	goalskeepersId: PropTypes.string.isRequired,
	defendersId: PropTypes.string.isRequired,
	midfieldersId: PropTypes.string.isRequired,
	strikersId: PropTypes.string.isRequired,
	budgetId: PropTypes.string.isRequired,
	playersId: PropTypes.string.isRequired,
	tipology: PropTypes.object.isRequired,
	tipologyId: PropTypes.string.isRequired,
	settings: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

export default TeamSettings
