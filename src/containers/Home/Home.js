
import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import I18n from 'i18n-js'

import { Card, Header } from "../../components"
import styles from "./styles"
import { commonStyle, textStyles } from '../../styles'
import { Actions } from "react-native-router-flux"

const League = ( item, onPress ) => (
	<Card
		key={item._id}
		onPress={onPress}
		title={item.name}
		description={item.team.name}
		type='small'
		arrow={true}
		icon={require('../../../assets/img/icons/League.png')}
	/>
);
	
	
const Home = (props) => {
	return (
		<View style={commonStyle.container}>
		
			{ /** header */}
			<Header title="start_league" backButton={false} rightButton={true} 
				iconTypeRight="account" 
				onPressRight={ () => Actions.reset("Account")} 
			/>
			
			{ /** crea/join */}
			<View style={styles.buttons}>
				<Card
					onPress={props.crea}
					title={I18n.translate('create')}
					description=""
					type='square'
					arrow={false}
					icon={require('../../../assets/img/icons/Add.png')}
				/>
				<Card
					onPress={props.join}
					title={I18n.translate('join')}
					description=""
					type='square'
					arrow={false}
					icon={require('../../../assets/img/icons/Join.png')}
				/>
			</View>

			{ /** leagues */}
			<View style={styles.list}>
				<Text style={textStyles.h2}>{I18n.translate('yourLeagues')}</Text>
				<FlatList
					data={props.leagues}
					ListEmptyComponent={() => { return <Text>NESSUNA LEGA</Text> }}
					renderItem={item => League(item.item, () => props.joinLeague( item.item ) )}
					keyExtractor={item => item._id}
				/>
			</View>
			</View>
	)
}
		
export default Home
		