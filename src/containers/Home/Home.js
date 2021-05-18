
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { FlatList, Text, View } from "react-native"
import { Card } from "../../components"
import { textStyles } from "../../styles"
import styles from "./styles"

const League = ( item, onPress ) => (
	<Card
		key={item._id}
		onPress={onPress}
		title={item.name}
		description={item.team.name}
		type='small'
		arrow={true}
		icon={"league"}
	/>
)


	
const Home = (props) => {
	return (
		<View style={styles.container}>
			
			{ /** crea/join */}
			<View style={styles.buttons}>
				<Card
					onPress={props.crea}
					title={I18n.translate("create")}
					description=""
					type='square'
					arrow={false}
					icon={"create_league"}
				/>
				<Card
					onPress={props.join}
					title={I18n.translate("join")}
					description=""
					type='square'
					arrow={false}
					icon={"join_league"}
				/>
			</View>

			{ /** leagues */}
			<View style={styles.list}>
				<Text style={textStyles.h1}>{I18n.translate("yourLeagues")}</Text>
				<FlatList
					data={props.leagues}
					ListEmptyComponent={() => { 
						return (
							<Text style={[textStyles.description, styles.description]}>
								{I18n.translate("noLeaguesFound")}
							</Text>) 
					}}
					renderItem={item => League(item.item, () => props.joinLeague( item.item ) )}
					keyExtractor={item => item._id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
		
export default Home


Home.propTypes = {
	leagues: PropTypes.array,
	join: PropTypes.func,
	crea: PropTypes.func,
	joinLeague: PropTypes.func
}