
import React from "react"
import { Alert } from "react-native"
import { Actions } from "react-native-router-flux"
import I18n from 'i18n-js'

import Create from './Create'
import CreateLeague from './CreateLeague'
import TeamSettings from './TeamSettings'
import AuctionSettings from './AuctionSettings'
import CreateTeam from './CreateTeam'

import { Leagues } from '../../services'

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
                [FIELDS_ID.participantsId]: 8,
                [FIELDS_ID.tipologyId]: TIPOLOGY.CLASSIC,
                [FIELDS_ID.goalskeepersId]: 3,
                [FIELDS_ID.defendersId]: 8,
                [FIELDS_ID.midfieldersId]: 8,
                [FIELDS_ID.strikersId]: 6,
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

    async onDone () {
        if ( !this.state.settings[FIELDS_ID.leagueNameId] ) {
            this.showError( 'field_error', 'missing_league_name' )
        }
        else if ( !this.state.settings[FIELDS_ID.passwordId] ) {
            this.showError( 'field_error', 'missing_password' )
        }
        else if ( !this.state.settings[FIELDS_ID.teamnameId] ) {
            this.showError( 'field_error', 'missing_team_name' )
        }
        else if ( this.state.settings[FIELDS_ID.participantsId]<2 ) {
            this.showError( 'field_error', 'participants_error' )
        }
        else if ( this.state.settings[FIELDS_ID.goalskeepersId]<1 ) {
            this.showError( 'field_error', 'goalskeepers_error' )
        }
        else if ( this.state.settings[FIELDS_ID.defendersId]<1 ) {
            this.showError( 'field_error', 'defenders_error' )
        }
        else if ( this.state.settings[FIELDS_ID.midfieldersId]<1 ) {
            this.showError( 'field_error', 'midfielders_error' )
        }
        else if ( this.state.settings[FIELDS_ID.strikersId]<1 ) {
            this.showError( 'field_error', 'forwarders_error' )
        }
        else if ( this.state.settings[FIELDS_ID.playersId]<1 ) {
            this.showError( 'field_error', 'players_error' )
        }
        else if ( this.state.settings[FIELDS_ID.countdownId]<3 ) {
            this.showError( 'field_error', 'countdown_error' )
        }
        else {
            try
            {
                await Leagues.Create( this.state.settings )

                Actions.replace('Dashboard')
            }
            catch (error) {
                this.showError( error.title, error.subTitle )
            }
        }
    }

    showError ( title, message )
    {
        Alert.alert(
            I18n.translate(title),
            I18n.translate(message),
            [{text: 'OK'}],
            { cancelable: true }
        )
    }

    render() {
        return (
            <Create
                leagueNameId={FIELDS_ID.leagueNameId}
                passwordId={FIELDS_ID.passwordId}
                participantsId={FIELDS_ID.participantsId}
                tipologyId={FIELDS_ID.tipologyId}
                goalskeepersId={FIELDS_ID.goalskeepersId}
                defendersId={FIELDS_ID.defendersId}
                midfieldersId={FIELDS_ID.midfieldersId}
                strikersId={FIELDS_ID.strikersId}
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
