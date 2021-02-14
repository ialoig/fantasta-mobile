import React, {useEffect, useState} from 'react'

import { Text, View, TouchableOpacity } from "react-native"
import I18n from "i18n-js"
import { Card, PrevButton, Header} from "../../components"
import { commonStyle, textStyles } from "../../styles"

import styles from "./styles"
import { useNavigation } from '@react-navigation/native'

import { User } from "../../services"
const Account = props => {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const [email, setEmail] = useState(null)

    useEffect(() => {
        const email = User.Get().email;
        return setEmail(email)
    }, [email])

    return (
        <View style={commonStyle.container}>

            { /** header */}
            <Header title="account" backButton="true" onPress={() => navigation.goBack()}/>

            <View style={styles.cardContent}>
                { /** account */}
                <Card 
                    onPress={() => navigation.navigate("AccountDetailsNavigator", { email: email })}
                    title={email}
                    description={email}
                    type='default'
                    arrow='true'
                />
                <View style={styles.cardContent}>
                    { /** settings */}
                    <Card
                        onPress={() => navigation.navigate("Settings")}
                        title={I18n.translate("settings")}
                        description={I18n.translate("settings_descr")}
                        type='small'
                        arrow='true'
                    />

                    { /** leagues */}
                    <Card 
                        onPress={() => navigation.navigate("LeagueOptions")}
                        title={I18n.translate("league")}
                        description={I18n.translate("league_descr")}
                        type='small'
                        arrow='true'
                    />

                    { /** support */}
                    <Card 
                        onPress={() => navigation.navigate("Support")}
                        title={I18n.translate("support")}
                        type='small'
                        arrow='true'
                    />
                </View>
            </View>
        </View>
    )
}

Account.propTypes = {

}

export default Account
