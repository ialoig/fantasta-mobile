
import React from "react"
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import I18n from 'i18n-js'

import styles from "./styles";
import { Styles } from '../../styles'

const League = ( title, onPress ) => (
    <TouchableOpacity onPress={onPress} style={styles.league}>
        <View style={styles.imageTitle} >
            <Image style={styles.leagueImage} source={require('../../../assets/icon.png')} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.openLeague}>{'>'}</Text>
    </TouchableOpacity>
)

const Home = (props) => {
    return (
        <SafeAreaView style={styles.content}>

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

            <View style={styles.list}>
                <Text style={styles.leaguesTitle}>{I18n.translate('yourLeagues')}</Text>
                <FlatList
                    data={props.leagues}
                    ListEmptyComponent={() => { return <Text>NESSUNA LEGA</Text> }}
                    renderItem={item => League( item.item.name, () => props.joinLeague( item.item.id ) )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home
