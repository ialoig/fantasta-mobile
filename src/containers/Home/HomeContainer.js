
import React from "react"
import { Alert } from "react-native"
import { Actions } from "react-native-router-flux"
import I18n from 'i18n-js'

import Home from './Home'

import { Leagues } from '../../services'

export class HomeContainer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            leagues: Leagues.Get().sort((a, b)=> a.name > b.name ? 1 : -1)
        }
    }

    componentDidMount () {
        this.mounted = true
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.mounted && this.setState({
                    leagues: Leagues.Get().sort((a, b)=> a.name > b.name ? 1 : -1)
                })
            }
        )
    }

    componentWillUnmount () {
        this.mounted = false
    }

    async joinLeague ( item ) {
        if ( item && item._id )
        {
            try
            {
                await Leagues.Join( item._id )

                Actions.Dashboard()
            }
            catch (error) {
                Alert.alert(
                    I18n.translate(error.title),
                    I18n.translate(error.subTitle),
                    [{text: 'OK'}],
                    { cancelable: true }
                )
            }
        }
    }

    render () {
        return (
            <Home
                leagues={this.state.leagues}
                crea={Actions.Create}
                join={Actions.Join}
                joinLeague={this.joinLeague.bind(this)}
            />
        )
    }
    
}
