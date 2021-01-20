
import { Platform, NativeModules } from 'react-native'
import I18n from 'i18n-js'

import { langs } from './translations'

const OS = Platform.OS || ''
const defaultLang = 'it'
let deviceLang = ''

if ( OS=='web' ) {
    let NV = navigator || {}
    deviceLang = NV.language || NV.userLanguage || NV.languages && NV.languages[0] || ''
    deviceLang = deviceLang && deviceLang.split('-')[0]
}
else if ( OS=='ios' ) {

    let SM = NativeModules.SettingsManager && NativeModules.SettingsManager.settings || {}
    deviceLang = SM.AppleLocale || SM.AppleLanguages && SM.AppleLanguages[0] || ''
}
else if ( OS=='android' ) {
    deviceLang = NativeModules.I18nManager && NativeModules.I18nManager.localeIdentifier || ''
}

I18n.fallbacks = true
I18n.defaultLocale = defaultLang
I18n.locale = deviceLang || defaultLang

I18n.translations = langs


