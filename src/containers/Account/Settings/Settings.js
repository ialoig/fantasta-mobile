import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"
import I18n from "i18n-js"

import { Card, Header} from "../../../components"
import styles from "../styles"
import { useNavigation } from '@react-navigation/native'

function Settings() {
    
    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="settings" backButton={true} onPressBack={() => navigation.goBack()}/>

            <View style={styles.cardContent}>
            { /** language */}
            <Card
                onPress={() => navigation.navigate("Language")}
                title={I18n.translate("language")}
                description=""
                type='small'
                arrow={true}
            />
            </View>
        </View>
    )
}

export default Settings

