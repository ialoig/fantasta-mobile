
import Validator from 'validator'
import I18n from 'react-native-i18n'
import _ from 'lodash'

export const checkValidity = ( type, value, errors, props ) => {
        
    let error = ''
    let valid = false

    if ( props.required && _.isEmpty( ''+value  ) )
    {
        error = errors['required'] || I18n.translate('requiredField')
    }
    else if ( !_.isEmpty( ''+value ) )
    {
        if ( props.pattern && !Validator.matches( value, new RegExp(props.pattern) ) )
        {
            error = valid ? '' : errors['pattern'] || I18n.translate('notValidField')
        }
        else if ( props.minLength && value.length<props.minLength )
        {
            error = errors['minLength'] || I18n.translate('tooShortField')
        }
        else if ( props.maxLength && value.length<props.maxLength )
        {
            error = errors['maxLength'] || I18n.translate('tooLongField')
        }
        else if ( props.min && parseFloat(value)<props.min )
        {
            error = errors['min'] || I18n.translate('notValidField')
        }
        else if ( props.max && parseFloat(value)>props.max )
        {
            error = errors['max'] || I18n.translate('notValidField')
        }
        else if ( !CorrectType( type, value ) )
        {
            error = errors['notCorrect'] || I18n.translate('notValidField')
        }
        else
        {
            valid = true
        }
    }
    else
    {
        valid = true
    }

    return {
        valid,
        error
    }
}

const CorrectType = ( type, value ) =>
{
    if ( type=='email' )
    {
        return Validator.isEmail(value)
    }
    else if ( type=='integer' )
    {
        return Validator.isInt(value)
    }
    else if ( type=='decimal' )
    {
        return Validator.isNumeric(value)
    }
    else if ( type=='phone' )
    {
        return Validator.isMobilePhone(value)
    }
    else if ( type=='text' )
    {
        return !Validator.isEmpty(value)
    }
    return true
}