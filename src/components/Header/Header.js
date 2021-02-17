import React from 'react'

import { View, Text } from "react-native"
import I18n from "i18n-js"

import PrevButtonContainer from "../../components/PrevButton/PrevButtonContainer"
import { commonStyle, textStyles } from "../../styles"

const Header = (props) => {

    const { title, backButton, onPress} = props
    return (            
        <View style={commonStyle.header}>
            {backButton ? <PrevButtonContainer onPress={onPress} icon="true" /> : null}
            <Text style={[textStyles.h1, commonStyle.title]}>{I18n.translate(title)}</Text>
        </View>
    )
}

export default Header
