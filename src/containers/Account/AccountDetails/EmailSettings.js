import React, { useState } from 'react'

import { View } from "react-native"
import { Button, Email, Header } from "../../../components"
import I18n from "i18n-js"
import Validator from 'validator'
import { FIELDS_ID } from '../../../constants'

import { commonStyle } from "../../../styles"
import { useNavigation } from '@react-navigation/native'
import { Auth } from '../../../services'

function EmailSettings({route}) {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const current_email = route.params?.email 

    const [email, setEmail] = useState(current_email)
    const [error, setError] = useState(false)

    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="change_email" backButton="false" onPress={() => navigation.goBack()}/>

            <Email
                id={FIELDS_ID.emailId}
                label={I18n.translate('email')}
                value={current_email}
                placeholder={""}
                showError={error}
                required={true}
                clearButtonMode='while-editing'
                onChange={(id, value) => {
                    setEmail(value)
                }}
            />

            <Button
                title={I18n.translate('save')}
                onPress={
                    async() => {
                    if ( !email || !Validator.isEmail(email) ) {
                        return setError(true)
                    }

                    let res = await Auth.modifyUser(email, "")
                    navigation.navigate("AccountDetails", {email: email})
                }}
                type='primary'
                size='large'
            />

        </View>
    )
}

export default EmailSettings
