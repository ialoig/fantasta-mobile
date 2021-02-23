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
    const { email } = route.params

    const [newEmail, setNewEmail] = useState(email)
    const [error, setError] = useState(false)


    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="change_email" backButton={true} onPressBack={() => navigation.goBack()}/>

            <Email
                id={FIELDS_ID.emailId}
                label={I18n.translate('email')}
                value={email}
                placeholder={""}
                showError={error}
                required={true}
                clearButtonMode='while-editing'
                onChange={(id, value) => {
                    if (value && !Validator.isEmpty(value))
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

                        try {
                            await Auth.update(newEmail, null)    
                            navigation.navigate("AccountDetails", {email: newEmail})
                        } catch (error) {
                            console.log("error:" +err)
                        }
                }}
                type='primary'
                size='large'
            />

        </View>
    )
}

export default EmailSettings
