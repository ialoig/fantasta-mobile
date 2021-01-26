
import React from "react"

import Create from './Create'
import CreateLeague from './CreateLeague'
import TeamSettings from './TeamSettings'
import OptionSettings from './OptionSettings'

const pages = [
    { key: "1", component: CreateLeague, title: "Create your League", description: "" },
    { key: "2", component: TeamSettings, title: "Team settings", description: "" },    
    { key: "3", component: OptionSettings, title: "Option settings", description: "" }
]

const leagueNameId = 'leagueName'
const passwordId = 'password'

export class CreateContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {
            pages,
            settings: {
                [leagueNameId]: '',
                [passwordId]: ''
            }
        }
    }

    onChange ( id, value, valid ) {

        let settings = {
            [id]: value
        }

        this.setState({
            settings: Object.assign({}, this.state.settings, settings)
        })
    }

    render() {
        return (
            <Create
                leagueNameId={leagueNameId}
                passwordId={passwordId}
                pages={pages}
                settings={this.state.settings}
            />
        )
    }
    
}
