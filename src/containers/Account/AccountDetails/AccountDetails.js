import React, { Component } from 'react'

import { View, Text } from "react-native"
import { commonStyle, textStyles } from "../../../styles"
import I18n from "i18n-js"

import { Card, PrevButton} from "../../../components"
import styles from "../styles"

function AccountDetails({navigation}) {
    return (
        <View style={commonStyle.container}>
            { /** header */}
            <View style={styles.header}>
                <PrevButton onPress={() => navigation.goBack()} icon="true" />
                <Text style={[textStyles.h1, styles.title]}>{I18n.translate("account_details")}</Text>
            </View>

            <View style={commonStyle.content}>
                { /** email */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("email")}
                    description={""}
                    type='small'
                    arrow='true'
                />
                { /** username */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("username")}
                    description={""}
                    type='small'
                    arrow='true'
                />
                { /** username */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("delete_account")}
                    description={""}
                    type='small'
                    arrow='true'
                />
            </View>
        </View>
    )
}

export default AccountDetails

