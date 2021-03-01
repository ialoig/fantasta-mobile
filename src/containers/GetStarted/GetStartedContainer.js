
import React from 'react'

import GetStarted from './GetStarted'
import {data} from "./costants"

export class GetStartedContainer extends React.Component {

    onDone () {
        this.props.navigation.navigate("Home")
    }
    
    render() {
        return (
            <GetStarted
                data={data}
                onDone={this.onDone.bind(this)}
            />
        )
    }
}