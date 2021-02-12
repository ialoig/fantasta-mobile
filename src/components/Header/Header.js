import React from 'react'

import { View, Text } from "react-native"
import I18n from "i18n-js"
import { commonStyle, textStyles } from "../../styles"

function Header({title}) {
    return (            
        <View style={commonStyle.header}>
            <Text style={textStyles.h1}>{I18n.translate(title)}</Text>
        </View>
    )
}

export default Header
