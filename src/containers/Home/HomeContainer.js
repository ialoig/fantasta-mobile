
import React from "react"
import { Actions } from "react-native-router-flux";

import Home from './Home'

import { Leagues } from '../../services'

const leaguaeId = 'leagueName'
const passwordId = 'password'

export class HomeContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

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

        // const leagues = Leagues.Get()
        const leagues = [
            { name: 'Lega 1', id: 'lega1' },
            { name: 'Lega 2', id: 'lega2', },
            { name: 'Lega 3', id: 'lega3', },
            { name: 'Lega 4', id: 'lega4', }
        ]

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
