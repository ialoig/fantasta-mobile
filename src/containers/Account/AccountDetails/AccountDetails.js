import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"
import I18n from "i18n-js"

import { Card, Header} from "../../../components"
import styles from "../styles"
import { useNavigation } from '@react-navigation/native'
import { User } from '../../../services'

function AccountDetails({route}) {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const email = route.params?.email 

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="account_details" backButton="true" onPress={() => navigation.goBack()}/>

            <View style={styles.cardContent}>
                { /** email */}
                <Card
                    onPress={() => navigation.navigate("EmailSettings", {email: email})}
                    title={I18n.translate("email")}
                    description={email}
                    type='small'
                    arrow='true'
                />
                { /** username */}
                <Card
                    onPress={() => navigation.navigate("UsernameSettings")}
                    title={I18n.translate("username")}
                    description={""}
                    type='small'
                    arrow='true'
                />
                { /** username */}
                <Card
                    onPress={() => navigation.navigate("DeleteAccount")}
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

