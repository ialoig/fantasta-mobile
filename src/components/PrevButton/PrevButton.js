
import React from "react"
import { TouchableOpacity, Image, View } from "react-native"

import { button } from "./styles"

const PrevButton = (props) => {

    const { type, icon } = props
    let icon_img = require('../../../assets/img/icons/prev.png')

    return (
        <TouchableOpacity onPress={props.onPress} style={button.button}>
            <View >
                {icon ? <Image source={icon_img} /> : null}
            </View>
        </TouchableOpacity>
    )
}

export default PrevButton
