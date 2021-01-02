
import LocalizedStrings  from 'react-native-localization'
import I18n from 'i18n-js'

import { langs } from './translations'

// const strings = new LocalizedStrings(langs)

// console.log(strings)

console.log(langs)

I18n.defaultLocale = "it";
I18n.locale = "it";

I18n.translations = langs


