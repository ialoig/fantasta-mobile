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
                label="Username"
                placeholder={I18n.translate('email')}
                required={true}
                clearButtonMode='while-editing'
                onChange={props.onChange}
            />
            
            <InputPassword
                id="password"
                label="Password"
                placeholder={I18n.translate('password')}
                required={true}
                clearButtonMode='never'
                onChange={props.onChange}
            />
        </View>
    )
}

export default Login
