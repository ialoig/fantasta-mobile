import React from 'react'

import { View, Text } from "react-native"
import I18n from "i18n-js"

import IconButtonContainer from "../IconButton/IconButtonContainer"
import { commonStyle, textStyles } from "../../styles"

const Header = (props) => {

    const { title, backButton, onPressBack, rightButton, onPressRight, iconTypeBack, iconTypeRight } = props
    
    return (            
        <View style={commonStyle.header}>
            {backButton && <IconButtonContainer onPress={onPressBack} icon={true} type={iconTypeBack}/>}
            <Text style={[textStyles.h1, commonStyle.title]}>{I18n.translate(title)}</Text>
            {rightButton && <IconButtonContainer onPress={onPressRight} icon={true} type={iconTypeRight}/>}
        </View>
    )
}

export default Header
