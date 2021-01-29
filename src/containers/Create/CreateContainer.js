
import React from "react"
import { Alert } from "react-native"
import I18n from 'i18n-js'

import Create from './Create'
import CreateLeague from './CreateLeague'
import TeamSettings from './TeamSettings'
import AuctionSettings from './AuctionSettings'
import CreateTeam from './CreateTeam'

import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from '../../constants'

const pages = [
    { key: "1", component: CreateLeague, title: 'createLeague', description: "" },
    { key: "2", component: TeamSettings, title: 'teamSettings', description: "" },    
    { key: "3", component: AuctionSettings, title: 'auctionSettings', description: "" },
    { key: "4", component: CreateTeam, title: 'createTeam', description: "" }
]

export class CreateContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            pages,
            settings: {
                [FIELDS_ID.leagueNameId]: '',
                [FIELDS_ID.passwordId]: '',
                [FIELDS_ID.partecipantsId]: 8,
                [FIELDS_ID.tipologyId]: TIPOLOGY.CLASSIC,
                [FIELDS_ID.goalskeepersId]: 3,
                [FIELDS_ID.defendersId]: 8,
                [FIELDS_ID.midfieldersId]: 8,
                [FIELDS_ID.forwardersId]: 6,
                [FIELDS_ID.playersId]: 22,
                [FIELDS_ID.budgetId]: 500,
                [FIELDS_ID.countdownId]: 60,
                [FIELDS_ID.auctiontypeId]: AUCTION_TYPE.RANDOM,
                [FIELDS_ID.startpriceId]: STARTING_PRICE.NONE,
                [FIELDS_ID.teamnameId]: ''
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
        if ( !this.state.settings[FIELDS_ID.leagueNameId] ) {
            this.showError(  )
        }
        else if ( !this.state.settings[FIELDS_ID.passwordId] ) {
            this.showError(  )
        }
        else if ( !this.state.settings[FIELDS_ID.teamnameId] ) {
            this.showError()
        }
        else if ( this.state.settings[FIELDS_ID.partecipantsId]<2 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.goalskeepersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.defendersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.midfieldersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.forwardersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.playersId]<1 ) {
            this.showError(  )
        }
        else if ( this.state.settings[FIELDS_ID.countdownId]<3 ) {
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
                leagueNameId={FIELDS_ID.leagueNameId}
                passwordId={FIELDS_ID.passwordId}
                partecipantsId={FIELDS_ID.partecipantsId}
                tipologyId={FIELDS_ID.tipologyId}
                goalskeepersId={FIELDS_ID.goalskeepersId}
                defendersId={FIELDS_ID.defendersId}
                midfieldersId={FIELDS_ID.midfieldersId}
                forwardersId={FIELDS_ID.forwardersId}
                playersId={FIELDS_ID.playersId}
                budgetId={FIELDS_ID.budgetId}
                countdownId={FIELDS_ID.countdownId}
                auctiontypeId={FIELDS_ID.auctiontypeId}
                startpriceId={FIELDS_ID.startpriceId}
                teamnameId={FIELDS_ID.teamnameId}
                tipology={TIPOLOGY}
                auctionType={AUCTION_TYPE}
                startingPrice={STARTING_PRICE}
                pages={pages}
                settings={this.state.settings}
                onChange={this.onChange.bind(this)}
                onDone={this.onDone.bind(this)}
            />
        )
    }
    
}
