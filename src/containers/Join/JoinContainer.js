import React from "react"
import { Alert } from "react-native"
import { Actions } from "react-native-router-flux"
import I18n from 'i18n-js'

import Join from './Join'
import JoinLeague from './JoinLeague'
import CreateTeam from '../Create/CreateTeam'
import { Leagues } from '../../services'
import { FIELDS_ID } from '../../constants'

const pages = [
    { key: "1", component: JoinLeague, title: 'joinLeague', description: "" },
    { key: "2", component: CreateTeam, title: 'createTeam', description: "" }
]

export class JoinContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pages,
            [FIELDS_ID.leagueNameId]: '',
            [FIELDS_ID.passwordId]: '',
            [FIELDS_ID.teamnameId]: ''
        }
    }
    
    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    async onDone() {
        if (!this.state[FIELDS_ID.leagueNameId]) {
            alert("missing_league_name")
            this.showError('field_error', 'missing_league_name')
        }
        else if (!this.state[FIELDS_ID.passwordId]) {
            alert("missing_password")
            this.showError('field_error', 'missing_password')
        }
        else if (!this.state[FIELDS_ID.teamnameId]) {
            alert("missing_team_name")
            this.showError('field_error', 'missing_team_name')
        }
        else {
            try {
                await Leagues.Join('', this.state[FIELDS_ID.leagueNameId], this.state[FIELDS_ID.passwordId], this.state[FIELDS_ID.teamnameId])
                Actions.replace('Dashboard')
            }
            catch (error) {
                this.showError(error.title, error.subTitle)
            }
        }
    }

    showError(title, message) {
        Alert.alert(
            // I18n.translate(title),
            // I18n.translate(message),
            title,
            message,
            [{ text: 'OK' }],
            { cancelable: true }
        )
    }

    render() {
        return (
            <Join
                pages={pages}
                onChange={this.onChange.bind(this)}
                onDone={this.onDone.bind(this)}
                leagueNameId={FIELDS_ID.leagueNameId}
                passwordId={FIELDS_ID.passwordId}
                teamnameId={FIELDS_ID.teamnameId}
            />
        )
    }

}
