
import React from "react"
import { Actions } from "react-native-router-flux"

import Home from './Home'

import { Leagues } from '../../services'

const leaguaeId = 'leagueName'
const passwordId = 'password'

export class HomeContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            [leaguaeId]: '',
            [passwordId]: '',
        }
    }

    crea () {
        Actions.Create()
    }

    join () {
        Actions.Join()
    }

    joinLeague ( id ) {
        if ( id ) {
            console.log(id)
        }
    }

    render() {

        const leagues = Leagues.Get()

        return (
            <Home
                leagues={leagues}
                leaguaeId={leaguaeId}
                passwordId={passwordId}
                crea={this.crea.bind(this)}
                join={this.join.bind(this)}
                joinLeague={this.joinLeague.bind(this)}
            />
        )
    }
    
}
