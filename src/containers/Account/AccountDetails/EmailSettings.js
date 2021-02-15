import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import I18n from "i18n-js"
import Validator from 'validator'
import { View } from "react-native"
import { Button, Email, Header } from "../../../components"
import { FIELDS_ID } from '../../../constants'

import { commonStyle } from "../../../styles"
import { Auth } from '../../../services'

function EmailSettings() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const route = useRoute();
    //getting email from route
    const { userID, email } = route.params

    const [newEmail, setNewEmail] = useState(email)
    const [error, setError] = useState(false)


    console.log("id["+userID+"] email["+email+"]");

    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="change_email" backButton="false" onPress={() => navigation.goBack()}/>

            <Email
                id={FIELDS_ID.emailId}
                label={I18n.translate('email')}
                value={email}
                placeholder={""}
                showError={error}
                required={true}
                clearButtonMode='while-editing'
                onChange={(id, value) => {
                    setNewEmail(value)
                }}
            />

            <Button
                title={I18n.translate('save')}
                onPress={
                    async() => {
                        if ( !newEmail || !Validator.isEmail(newEmail) ) {
                            return setError(true)
                        }

                        await Auth.update(userID, newEmail, null)
                        .then (() => {
                            console.log("new email=" +newEmail+ " - back to AccountDetails ...")
                            navigation.navigate("AccountDetails", {email: newEmail})
                        })
                        .catch((err) => {
                            console.log("error:" +err)
                        })
                }}
                type='primary'
                size='large'
            />

        </View>
    )
}

export default EmailSettings
