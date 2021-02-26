
import React from 'react'
import { Text, View } from "react-native"
import { Actions } from 'react-native-router-flux'
import { useNavigation, useRoute } from '@react-navigation/native'
import Costants from "expo-constants"
import I18n from "i18n-js"

import { Card, Header, Button} from "../../components"
import { Token, User } from '../../services'

import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

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
            <Header title="account" backButton={true} onPressBack={() => navigation.goBack()} rightButton={false}/>

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

                    { /** support */}
                    <Card 
                        onPress={() => navigation.navigate("Support")}
                        title={I18n.translate("support")}
                        type='small'
                        arrow={true}
                    />
                </View>

                <Button
                    title={I18n.translate('logout')}
                    onPress={ () => {
                        User.remove();
                        Token.remove();
                        // Actions.reset("Login")
                        navigation.navigate("Login")
                    }}
                    type='primary'
                    size='large'
                />
                <Text style={[styles.version, textStyles.description]}>
                    {"App version: " + Costants.manifest.version}
                </Text>
            </View>
        </View>
    )
}

export default Account
