import React, { Component } from 'react'

import Header from "./Header"

export default class HeaderContainer extends Component {

    render() {
        const { 
            title = '',
            backButton = 'false',
            onPress
        } = this.props
    
        return (
            <Header title={title} backButton={backButton} onPress={onPress} />
        )
    }
}

