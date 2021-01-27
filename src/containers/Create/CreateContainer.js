
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
const partecipantsId = 'partecipants'
const tipologyId = 'tipology'
const goalskeepersId = 'goalskeepers'
const defendersId = 'defenders'
const midfieldersId = 'midfielders'
const forwardersId = 'forwarders'
const playersId = 'players'
const budgetId = 'budget'
const countdownId = 'countdown'
const auctiontypeId = 'auctiontype'
const startpriceId = 'startprice'
const teamnameId = 'teamname'

const tipology = {
    MANTRA: 'mantra',
    CLASSIC: 'classic'
}

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
                [passwordId]: '',
                [partecipantsId]: 1,
                [tipologyId]: tipology.CLASSIC,
                [goalskeepersId]: 1,
                [defendersId]: 1,
                [midfieldersId]: 1,
                [forwardersId]: 1,
                [playersId]: 1,
                [budgetId]: 500,
                [countdownId]: 60,
                [auctiontypeId]: 'random',
                [startpriceId]: '0',
                [teamnameId]: ''
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
                partecipantsId={partecipantsId}
                tipologyId={tipologyId}
                goalskeepersId={goalskeepersId}
                defendersId={defendersId}
                midfieldersId={midfieldersId}
                forwardersId={forwardersId}
                playersId={playersId}
                budgetId={budgetId}
                countdownId={countdownId}
                auctiontypeId={auctiontypeId}
                startpriceId={startpriceId}
                teamnameId={teamnameId}
                tipology={tipology}
                pages={pages}
                settings={this.state.settings}
                onChange={this.onChange.bind(this)}
            />
        )
    }
    
}
