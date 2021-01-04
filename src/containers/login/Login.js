import React from "react";
import { View } from "react-native";
import I18n from 'react-native-i18n'

import styles from "./styles"

import { InputPassword, InputEmail } from '../../components'

const Login = (props) => {
    return (
        <View>
            <InputEmail
                id="email"
                label={I18n.translate('email')}
                placeholder={I18n.translate('email')}
                required={true}
                clearButtonMode='while-editing'
                onChange={props.onChange}
            />
            
            <InputPassword
                id="password"
                label={I18n.translate('password')}
                placeholder={I18n.translate('password')}
                required={true}
                minLength={6}
                clearButtonMode='never'
                onChange={props.onChange}
            />
        </View>
    )
}

export default Login
