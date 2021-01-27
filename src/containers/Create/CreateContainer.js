
import React from "react"
import { Alert } from "react-native"
import I18n from 'i18n-js'

import Create from './Create'
import CreateLeague from './CreateLeague'
import TeamSettings from './TeamSettings'
import AuctionSettings from './AuctionSettings'
import CreateTeam from './CreateTeam'

const pages = [
    { key: "1", component: CreateLeague, title: 'createLeague', description: "" },
    { key: "2", component: TeamSettings, title: 'teamSettings', description: "" },    
    { key: "3", component: AuctionSettings, title: 'auctionSettings', description: "" },
    { key: "4", component: CreateTeam, title: 'createTeam', description: "" }
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

const auctionType = {
    RANDOM: 'random',
    CALL: 'call',
    ALPHABETIC: 'alphabetic'
}

const startingPrice = {
    NONE: 'none',
    LIST: 'list'
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
                [partecipantsId]: 8,
                [tipologyId]: tipology.CLASSIC,
                [goalskeepersId]: 3,
                [defendersId]: 8,
                [midfieldersId]: 8,
                [forwardersId]: 6,
                [playersId]: 22,
                [budgetId]: 500,
                [countdownId]: 60,
                [auctiontypeId]: auctionType.RANDOM,
                [startpriceId]: startingPrice.NONE,
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

    onDone () {
        if ( !this.state.settings[leagueNameId] ) {
            this.showError(  )
        }
        else if ( !this.state.settings[passwordId] ) {
            this.showError(  )
        }
        else if ( !this.state.settings[teamnameId] ) {
            this.showError()
        }
        else if ( this.state.settings[partecipantsId]<2 ) {
            this.showError(  )
        }
        else if ( this.state.settings[goalskeepersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[defendersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[midfieldersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[forwardersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[playersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[countdownId]<3 ) {
            this.showError(  )
        }
        else {

        }
    }

    showError ( title, message )
    {
        Alert.alert(
            I18n.translate(title),
            I18n.translate(message),
            [{text: 'OK'}],
            { cancelable: true }
          );
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
                auctionType={auctionType}
                startingPrice={startingPrice}
                pages={pages}
                settings={this.state.settings}
                onChange={this.onChange.bind(this)}
                onDone={this.onDone.bind(this)}
            />
        )
    }
    
}
