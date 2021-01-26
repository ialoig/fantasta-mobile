import React from 'react';
import { View } from "react-native";

import AppIntroSlider from 'react-native-app-intro-slider';
import I18n from 'i18n-js'

import GetStarted from './GetStarted';
import { Button } from "../../components"
import {data} from "./costants"
import styles from "./styles"

export class GetStartedContainer extends React.Component {

    /** render Next button */
    _renderNextButton = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button
                    title={'Next'} //GL TODO: set translate
                    type='primary'
                    size='large'
                />
            </View>
        )
    };

    /** render done button */
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button
                    title={'Get Started!'} //GL TODO: set translate
                    type='primary'
                    size='large'
                />
            </View>
        )
    };

    render() {
        return (
            <AppIntroSlider
                renderItem={GetStarted}
                data={data}
                bottomButton="true" //show button on bottom side
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                renderNextButton={this._renderNextButton}
                renderDoneButton={this._renderDoneButton}
            />
        )
    }
}