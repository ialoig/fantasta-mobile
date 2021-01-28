
import React from 'react'

import GetStarted from './GetStarted'
import {data} from "./costants"
import { Actions } from 'react-native-router-flux'

export class GetStartedContainer extends React.Component {

    onDone () {
        Actions.reset('Home')
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