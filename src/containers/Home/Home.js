
import React from "react"
import { FlatList, Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import I18n from 'i18n-js'

import { Button, InputText, Password } from '../../components'

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

            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <InputText
                            id={props.leaguaeId}
                            label={I18n.translate('nome_lega')}
                            placeholder={I18n.translate('nome_lega')}
                            showError={props.showError}
                            required={true}
                            clearButtonMode='while-editing'
                            onChange={props.onChange}
                        />
                        
                        <Password
                            id={props.passwordId}
                            label={I18n.translate('password')}
                            placeholder={I18n.translate('password')}
                            showError={props.showError}
                            required={true}
                            clearButtonMode='never'
                            onChange={props.onChange}
                        />

                        <View style={styles.modalButtons}>
                            <Button
                                title={I18n.translate('cancel')}
                                onPress={props.closeModal}
                                type='secondary'
                                size='small'
                            />
                            <Button
                                title={I18n.translate('join')}
                                onPress={props.joinLeague}
                                type='primary'
                                size='small'
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home
