
import I18n from 'react-native-i18n'

export const checkValidity = ( value, errors, validity, props ) => {
        
    let error = ''
    let valid = true

    if ( props.required && !value )
    {
        valid = false
        error = errors['required'] || I18n.translate('requiredField')
    }
    else if ( value && props.pattern )
    {
        let regEx = new RegExp(props.pattern)
        
        valid = regEx.test(value)
        error = errors['pattern'] || I18n.translate('notValidField')
    }
    else if ( props.minLength && value.length<props.minLength )
    {
        valid = false
        error = errors['minLength'] || I18n.translate('tooShortField')
    }
    else if ( !validity.valid )
    {
        valid = false

        let err = ''
        for ( let i in validity )
        {
            if ( validity[i] )
            {
                err = validity[i]
                break
            }
        }

        error = errors[err] || errors['custom'] || I18n.translate('notValidField')
    }

    return {
        valid,
        error
    }
}