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
        return navigation.navigate("Account", 
            {
                email: email,
                username: username
            })
    }

    const goTo = (screen) => {
        if (!screen) {
            return
        }
        switch(screen) {
            case "UsernameSettings":
                return navigation.navigate("UsernameSettings", { username: username });
            case "EmailSettings":
                return navigation.navigate("EmailSettings", { email: email })
            case "DeleteAccount":
                return navigation.navigate("DeleteAccount", { email: email })
            default:
                return
        }
    }

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="account_details" backButton={true} onPressBack={backToAccount}/>

            <View style={styles.cardContent}>
                { /** email */}
                <Card
                    onPress={() => goTo("EmailSettings")}
                    title={I18n.translate("email")}
                    description={email}
                    type='small'
                    arrow={true}
                />
                { /** username */}
                <Card
                    onPress={() => goTo("UsernameSettings")}
                    title={I18n.translate("username")}
                    description={username}
                    type='small'
                    arrow={true}
                />
                { /** username */}
                <Card
                    onPress={() => goTo("DeleteAccount")}
                    title={I18n.translate("delete_account")}
                    description={""}
                    type='small'
                    arrow={true}
                />
            </View>
        </View>
    )
}

export default AccountDetails

