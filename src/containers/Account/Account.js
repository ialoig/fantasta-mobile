import React, {useEffect, useState} from 'react'

import { View } from "react-native"
import I18n from "i18n-js"
import { Card, PrevButton, Header} from "../../components"
import { commonStyle, textStyles } from "../../styles"

import styles from "./styles"
import { useNavigation, useRoute } from '@react-navigation/native'

function Account () {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const route = useRoute();
    const { email, username } = route.params

    const navigateToAccountDetails = () => {
        return navigation.navigate("AccountDetailsNavigator", 
            {
                email: email,
                username: username
            })
    }


    return (
        <View style={commonStyle.container}>

            { /** header */}
            <Header title="account" backButton={true} onPress={() => navigation.goBack()}/>

            <View style={styles.cardContent}>
                { /** account */}
                <Card 
                    onPress={navigateToAccountDetails}
                    title={username}
                    description={email}
                    type='default'
                    arrow={false}
					icon={require('../../../assets/img/icons/user_50.png')}
                />
                <View style={styles.cardContent}>
                    { /** settings */}
                    <Card
                        onPress={() => navigation.navigate("Settings")}
                        title={I18n.translate("settings")}
                        description={I18n.translate("settings_descr")}
                        type='small'
                        arrow={true}
                    />

                    { /** leagues */}
                    <Card 
                        onPress={() => navigation.navigate("LeagueOptions")}
                        title={I18n.translate("league")}
                        description={I18n.translate("league_descr")}
                        type='small'
                        arrow={true}
                    />

                    { /** support */}
                    <Card 
                        onPress={() => navigation.navigate("Support")}
                        title={I18n.translate("support")}
                        type='small'
                        arrow={true}
                    />
                </View>
            </View>
        </View>
    )
}

export default Account
