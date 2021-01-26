import React from 'react';
import { View, Text } from "react-native";

import AppIntroSlider from 'react-native-app-intro-slider';
import I18n from 'i18n-js'

import GetStarted from './GetStarted';
import {data} from "./costants"
import styles from "./styles"
import commonStyle from "../../styles/styles";
import { button, text} from "../../components/Button/styles"

export class GetStartedContainer extends React.Component {

    /** render Next button */
    _renderNextButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('Next')}</Text>
            </View>
        )
    };

    /** render done button */
    _renderDoneButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('Get Started !')}</Text>
            </View>
        )
    };

    render() {
        return (
            <AppIntroSlider
                renderItem={GetStarted}
                data={data}
                bottomButton //show button on bottom side
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                renderNextButton={this._renderNextButton}
                renderDoneButton={this._renderDoneButton}
            />
        )
    }
}