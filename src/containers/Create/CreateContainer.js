
import React from "react"

import Create from './Create'

export class CreateContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Create />
        )
    }
    
}
