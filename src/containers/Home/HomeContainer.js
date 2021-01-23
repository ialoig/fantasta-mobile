
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
            modalVisible: false,
            showError: false,
            [leaguaeId]: '',
            [passwordId]: '',
        }
    }

    crea () {
        Actions.Crea()
    }

    join () {
        this.openModal()
    }

    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    joinLeague ( id ) {
        
        let leagueName = this.state.leagueName || ''
        let password = this.state.password || ''


        if ( leagueName && password || id ) {
            console.log( leagueName + '_' + password )
            console.log(id)
        }
        else {
            this.setState({showError: true})
        }
    }

    openModal () {
        this.setState({ modalVisible: true })
    }

    closeModal () {
        this.setState({
            showError: false,
            modalVisible: false
        })
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
                showError={this.state.showError}
                modalVisible={this.state.modalVisible}
                crea={this.crea.bind(this)}
                join={this.join.bind(this)}
                joinLeague={this.joinLeague.bind(this)}
                openModal={this.openModal.bind(this)}
                closeModal={this.closeModal.bind(this)}
            />
        )
    }
    
}
