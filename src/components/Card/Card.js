
import React from "react"
import { Text, TouchableOpacity, Image, View } from "react-native"
import { textStyles } from "../../styles"

import { card, image } from "./styles"

const Card = (props) => {

    const { title, description, type, icon, arrow } = props
    let arrow_img = require('../../../assets/img/icons/forward.png')
    let icon_img = require('../../../assets/img/icons/forward.png')

    return (
        <TouchableOpacity onPress={props.onPress} style={[ card.card, card[type]]}>
            {icon ? <Image style={image.forward} source={icon_img} /> : null}
            <View style={card.text}>
                <Text style={[ textStyles.title ]}>{title}</Text>
                {description ? <Text style={[ textStyles.description ]}>{description}</Text> : null}
            </View>
            <View style={card.arrow}>
                {arrow ? <Image style={image.forward} source={arrow_img} /> : null}
            </View>
        </TouchableOpacity>
    )
}

export default Card
