import React from 'react'

import { Text, View, TouchableOpacity } from "react-native"
import I18n from "i18n-js"
import { Card, PrevButton} from "../../components"
import { commonStyle, textStyles } from "../../styles"

import styles from "./styles"

const Account = props => {
    return (
        <View style={commonStyle.container}>
 

            { /** header */}
            <View style={styles.header}>
                <PrevButton onPress={() => props.navigation.goBack()} icon="true" />
                <Text style={[textStyles.h1, styles.title]}>{I18n.translate("account")}</Text>
            </View>

            <View style={commonStyle.content}>
                { /** account */}
                <Card 
                    onPress={props.accountDetails}
                    title={props.email}
                    description={props.email}
                    type='default'
                    arrow='true'
                />
                <View style={commonStyle.content}>
                    { /** settings */}
                    <Card
                        onPress={() => props.navigation.navigate("Settings")}
                        title={I18n.translate("settings")}
                        description={I18n.translate("settings_descr")}
                        type='small'
                        arrow='true'
                    />

                    { /** leagues */}
                    <Card 
                        onPress={props.accountDetails}
                        title={I18n.translate("league")}
                        description={I18n.translate("league_descr")}
                        type='small'
                        arrow='true'
                    />

                    { /** support */}
                    <Card 
                        onPress={props.accountDetails}
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
