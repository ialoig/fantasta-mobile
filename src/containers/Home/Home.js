
import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import I18n from 'i18n-js'

import styles from "./styles"
import { commonStyle } from '../../styles'

const League = ( item, onPress ) => (
    <TouchableOpacity onPress={onPress} style={styles.league} key={item._id}>
        <View style={styles.imageTitle} >
            <Image style={styles.leagueImage} source={require('../../../assets/icon.png')} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>({item.team.name})</Text>
        </View>
        <Text style={styles.openLeague}>{'>'}</Text>
    </TouchableOpacity>
)

const Home = (props) => {
    return (
        <View style={commonStyle.content}>
            <View style={styles.buttonsView}>
                <View style={styles.buttons}>
                    <View style={styles.buttonCrea}>
                        <TouchableOpacity onPress={props.crea} style={{width: '100%', height: '100%'}}>
                            <Text>CREA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonJoin}>
                        <TouchableOpacity onPress={props.join} style={{width: '100%', height: '100%'}}>
                            <Text>JOIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.listView}>
                <View style={styles.list}>
                    <Text style={styles.leaguesTitle}>{I18n.translate('yourLeagues')}</Text>
                    <FlatList
                        data={props.leagues}
                        ListEmptyComponent={() => { return <Text>NESSUNA LEGA</Text> }}
                        renderItem={item => League(item.item, () => props.joinLeague( item.item ) )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default Home
