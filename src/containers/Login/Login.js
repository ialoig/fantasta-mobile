
import React from "react"
import { Keyboard, TouchableWithoutFeedback, View, KeyboardAvoidingView, Text } from "react-native"
import I18n from 'i18n-js'

import styles from "./styles"
import { commonStyle } from "../../styles"

import { Button, Password, Email, Logo } from '../../components'

const Login = (props) => {
    return (
        <KeyboardAvoidingView style={commonStyle.container} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {/** form container: START */}
                <View style={commonStyle.content}>
                    <View style={commonStyle.header}>
                        <Logo />
                    </View>
                    
                    <View style={commonStyle.content}>
                        <Email
                            id={props.emailId}
                            label={I18n.translate('email')}
                            placeholder={I18n.translate('email')}
                            showError={props.showError}
                            required={true}
                            clearButtonMode='while-editing'
                            onChange={props.onChange}
                        />
                        <Password
                            id={props.passwordId}
                            label={I18n.translate('password')}
                            placeholder={I18n.translate('password')}
                            showError={props.showError}
                            required={true}
                            minLength={6}
                            clearButtonMode='never'
                            onChange={props.onChange}
                        />
                        <Text style={styles.forgot} onPress={() => props.ForgotPassword()}>
                            {I18n.translate('forgotPassword')}?
                        </Text>
                    </View>
                    {/** form container: END */}

                    <View style={commonStyle.buttonContainer}>
                        <Button
                            title={I18n.translate('login')}
                            onPress={props.Login}
                            type='primary'
                            size='large'
                        />
                        <Button
                            title={I18n.translate('register')}
                            onPress={props.Register}
                            type='secondary'
                            size='large'
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login


