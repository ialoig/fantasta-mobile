
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { NumberInc, Radio } from '../../components'

import styles from "./styles";
import { Styles } from '../../styles'

const AuctionSettings = (props) => {
    return (
        <View>
            <NumberInc
                label={I18n.translate('countdown')}
                value={props.settings[props.countdownId]}
                step={1}
                min={3}
                onChange={value => props.onChange( props.countdownId, value )} 
            />

            <Radio 
                label={I18n.translate('auctionTipology')}
                value={props.settings[props.auctiontypeId]}
                items={[
                    { label: I18n.translate(props.auctionType.RANDOM), value: props.auctionType.RANDOM },
                    { label: I18n.translate(props.auctionType.CALL), value: props.auctionType.CALL },
                    { label: I18n.translate(props.auctionType.ALPHABETIC), value: props.auctionType.ALPHABETIC }
                ]}
                onChange={value => props.onChange( props.auctiontypeId, value )} 
            />
            <Radio 
                label={I18n.translate('startingPrice')}
                value={props.settings[props.startpriceId]}
                items={[
                    { label: I18n.translate('zero'), value: props.startingPrice.NONE },
                    { label: I18n.translate('listPrice'), value: props.startingPrice.LIST }
                ]}
                onChange={value => props.onChange( props.startpriceId, value )} 
            />
        </View>
    )
}

export default AuctionSettings
