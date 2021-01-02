import React from "react";
import { View } from "react-native";
import _ from 'lodash'

import Password from './Password'

export default class TextContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            value: props.value!==undefined && props.value!==null ? props.value : '',
            error: '',
            valid: true,
            touched: false,
            focused: false,
        };
    }

    componentDidMount () {
        this.checkValidity()
    }

    componentDidUpdate ( oldProps, oldState ) {
        if ( oldProps.value!=this.props.value && this.props.value!=this.state.value ) {

            this.setState({
                value: this.props.value!==undefined && this.props.value!==null ? this.props.value : ''
            })
        }
    }

    onChangeText ( text ) {
        this.setState({ value: text }, ()=>{ this.checkValidity() })

        this.props.onChange && this.props.onChange( this.props.id, text, this.state.valid )
    }

    onBlur ( e ) {
        this.setState({
            focused: false
        })

        this.props.onBlur && this.props.onBlur( this.props.id, this.state.value, this.state.valid )
    }

    onFocus (e) {
        this.setState({
            touched: true,
            focused: true
        })

        this.props.onFocus && this.props.onFocus( this.props.id, this.state.value, this.state.valid )
    }

    checkValidity () {
        
        let error = ''
        let valid = true

        let errors = this.props.errors || {}
        let validity = this.ref && this.ref.validity || {}

        if ( this.props.required && !this.state.value )
        {
            valid = false
            error = errors['required'] || 'Campo obbligatorio'
        }
        else if ( this.state.value && this.props.pattern )
        {
            let regEx = new RegExp(this.props.pattern)
            
            valid = regEx.test(this.state.value)
            error = errors['pattern'] || 'Campo non valido'
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

            error = errors[err] || errors['custom'] || 'Campo non valido'
        }

        this.setState({
            valid,
            error
        })
    }

    render() {

        const {
            id,
            label='',
            placeholder='',
            autoCapitalize='none',
            clearButtonMode='while-editing',
            showError=false,
            hideError=false,
            required=false,
            editable=true,
            selectTextOnFocus=false,
            maxLength=100
        } = this.props

        let valid = this.state.valid && ( _.isBoolean(this.props.valid) ? this.props.valid : true )
        let hasError = !valid && ( this.state.touched && !this.state.focused || showError ) && !hideError
        let isValid = valid && this.state.touched && !this.state.focused

        return (
            <View>
                <Password
                    id={id}
                    name={id}
                    label={label}
                    value={this.state.value}
                    placeholder={placeholder}
                    onRef={ ref => { this.ref = ref }}

                    autoCapitalize={autoCapitalize}
                    clearButtonMode={clearButtonMode}
                    textContentType={'password'}

                    error={this.state.error}
                    isValid={isValid}
                    hasError={hasError}
                    required={required}
                    editable={editable}
                    selectTextOnFocus={selectTextOnFocus}
                    maxLength={maxLength}

                    onChangeText={this.onChangeText.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                />
            </View>
        )
    }
}
