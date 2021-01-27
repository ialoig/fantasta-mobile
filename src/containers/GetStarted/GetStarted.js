import React from 'react'
import { View, Text, Image } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
import I18n from 'i18n-js'

import styles from "./styles"
import { Styles } from "../../styles"
import { button, text} from "../../components/Button/styles"

const GetStarted = (props) => {

    /** render Next button */
    const _renderNextButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, Styles.commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('next')}</Text>
            </View>
        )
    };

    /** render done button */
    const _renderDoneButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, Styles.commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('getStarted')}</Text>
            </View>
        )
    };

    const Start = ({ item, key }) => {
        
        return (
            <View style={Styles.commonStyle.container} key={key}>
                <View style={Styles.commonStyle.content} key={key}>
                    <Image source={item.image} />
                </View>
                <View style={Styles.commonStyle.flex} key={key}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <AppIntroSlider
            renderItem={Start}
            data={props.data}
            bottomButton //show button on bottom side
            onDone={props.onDone}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
        />
    )
}

export default GetStarted
