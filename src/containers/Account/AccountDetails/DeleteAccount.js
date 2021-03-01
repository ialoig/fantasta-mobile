import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import I18n from "i18n-js"
import { Text, View } from "react-native"
import { Header, Button, Password } from "../../../components"

import { commonStyle, textStyles } from "../../../styles"
import { FIELDS_ID } from "../../../constants"
import { Auth } from '../../../services'

function DeleteAccount() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const route = useRoute();
    //getting email from route
    const { email } = route.params

    const [check, setCheck] = useState(null)
    const [error, setError] = useState(false)

    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="delete_account" backButton={true} onPressBack={() => navigation.goBack()}/>

            <Text style={[textStyles.h3, commonStyle.justifyText]}>
                {I18n.translate("delete_warn")}
            </Text>

            <Password
                id={FIELDS_ID.passwordId}
                label={I18n.translate('password')}
                placeholder={I18n.translate('password')}
                showError={error}
                required={true}
                minLength={6}
                clearButtonMode='never'
                onChange={(id, value) => {
                    setCheck(value)
                }}
            />
            <Text style={[textStyles.description, commonStyle.justifyText]}>
                {I18n.translate("delete_descr")}
            </Text>
            <Button
                title={I18n.translate('delete')}
                onPress={
                    async() => {
                        if ( !check ) {
                            return setError(true)
                        }
                        try {
                            await Auth.deleteAccount(check);
                            navigation.navigate("Login")
                        } catch (error) {
                            console.log("[DeleteAccount] - error=" +JSON.stringify(error))
                            return setError(true)
                        }
                }}
                type='alert'
                size='large'
            />

        </View>
    )
}

export default DeleteAccount
