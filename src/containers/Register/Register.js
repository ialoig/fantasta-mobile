
import React from "react"
import { Keyboard, TouchableWithoutFeedback, View, Text, KeyboardAvoidingView } from "react-native"
import I18n from 'i18n-js'

import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

import { Button, Email, Logo, Password, RepeatPassword } from '../../components'

const Register = (props) => {
    return (
        <KeyboardAvoidingView style={commonStyle.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

                        <RepeatPassword
                            id={props.repeatPasswordId}
                            label={I18n.translate('repeatPassword')}
                            placeholder={I18n.translate('repeatPassword')}
                            password={props.password}
                            showError={props.showError}
                            required={true}
                            minLength={6}
                            clearButtonMode='never'
                            onChange={props.onChange}
                        />
                    </View>

                    <View style={[commonStyle.flex, commonStyle.buttonContainer]}>
                        <Button
                            title={I18n.translate('register')}
                            onPress={props.Register}
                            type='primary'
                            size='large'
                        />
                        <Text style={[styles.haveAccount, textStyles.button]} onPress={() => props.login()}>
                            {I18n.translate('haveAccount')}{I18n.translate('login')}
                        </Text>

                        {/*gl: rimosso e sostituito con testo: approvazione rimozione
                        <Button
                            title={I18n.translate('login')}
                            onPress={props.login}
                            type='secondary'
                            size='large'
                            border={false}
                        />
                        */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register
