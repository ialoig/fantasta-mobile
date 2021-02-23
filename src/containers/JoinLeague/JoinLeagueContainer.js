import React from "react"
import { Actions } from "react-native-router-flux"
import JoinLeagueSlider from './JoinLeagueSlider'
import JoinLeague from './JoinLeague'
import CreateTeam from '../Create/CreateTeam'
import { Leagues, Error } from '../../services'
import { FIELDS_ID } from '../../constants'

const pages = [
    { key: "1", component: JoinLeague, title: 'joinLeague', description: "" },
    { key: "2", component: CreateTeam, title: 'createTeam', description: "" }
]

export class JoinLeagueContainer extends React.Component {

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
            Error.showAlert('field_error', 'missing_league_name')
        }
        else if (!this.state[FIELDS_ID.passwordId]) {
            Error.showAlert('field_error', 'missing_password')
        }
        else if (!this.state[FIELDS_ID.teamnameId]) {
            Error.showAlert('field_error', 'missing_team_name')
        }
        else {
            try {
                await Leagues.Join('', this.state[FIELDS_ID.leagueNameId], this.state[FIELDS_ID.passwordId], this.state[FIELDS_ID.teamnameId])
                Actions.replace('Dashboard')
            }
            catch (error) {/*error handling done in Leagues.Join*/}
        }
    }

    render() {
        return (
            <JoinLeagueSlider
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
