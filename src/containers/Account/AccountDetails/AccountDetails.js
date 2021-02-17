import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import I18n from "i18n-js"
import { View } from "react-native"

import { commonStyle } from "../../../styles"
import { Card, Header} from "../../../components"
import styles from "../styles"

function AccountDetails() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const route = useRoute();
    const { email, username } = route.params

    const backToAccount = () => {
        console.log("back to Account")
        return navigation.navigate("Account", 
            {
                email: email,
                username: username
            })
    }

    const goToEmailSettings = () => {
        console.log("go to EmailSettings")
        return navigation.navigate("EmailSettings", 
            {
                email: email
            })
    }

    const goToUsernameSettings = () => {
        console.log("go to UsernameSettings")
        return navigation.navigate("UsernameSettings", 
            {
                username: username
            })
    }

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="account_details" backButton="true" onPress={backToAccount}/>

            <View style={styles.cardContent}>
                { /** email */}
                <Card
                    onPress={goToEmailSettings}
                    title={I18n.translate("email")}
                    description={email}
                    type='small'
                    arrow='true'
                />
                { /** username */}
                <Card
                    onPress={goToUsernameSettings}
                    title={I18n.translate("username")}
                    description={username}
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

