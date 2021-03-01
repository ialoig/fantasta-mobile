
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
import I18n from 'i18n-js'
import { Header } from "../../components"
import { carouselSyle, commonStyle } from '../../styles'
import { button, text } from "../../components/Button/styles"
import styles from './styles'

const JoinLeagueSlider = (props) => {

    const renderNextButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('next')}</Text>
            </View>
        )
    }

    const renderDoneButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('join')}</Text>
            </View>
        )
    }

    const _renderItem = ({ item, key }) => {
        const Page = item.component
        return (
            <View style={commonStyle.container}>
                <Header title={item.title} />
                <View style={[commonStyle.content, commonStyle.flex_start]}>
                    <Page item={item} {...props} />
                </View>
            </View>
        )
    }

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={props.pages}
            bottomButton
            onDone={props.onDone}
            dotStyle={carouselSyle.dotStyle}
            activeDotStyle={carouselSyle.activeDotStyle}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
        />
    )
}

export default JoinLeagueSlider
