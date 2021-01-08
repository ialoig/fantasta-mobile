import React from "react";
import { Button, KeyboardAvoidingView, SafeAreaView } from "react-native";
import I18n from 'react-native-i18n'
import { View } from "react-native";

import styles from "./styles"

import { InputPassword, InputEmail } from '../../components'

const Login = (props) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <InputEmail
                id={props.emailId}
                label={I18n.translate('email')}
                placeholder={I18n.translate('email')}
                showError={props.showError}
                required={true}
                clearButtonMode='while-editing'
                onChange={props.onChange}
            />
            
            <InputPassword
                id={props.passwordId}
                label={I18n.translate('password')}
                placeholder={I18n.translate('password')}
                showError={props.showError}
                required={true}
                minLength={6}
                clearButtonMode='never'
                onChange={props.onChange}
            />

            <View style={styles.button}>
                <Button
                    title={I18n.translate('login')}
                    onPress={() => props.Login()}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login


