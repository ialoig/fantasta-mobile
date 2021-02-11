
import React from "react"
import { Actions } from "react-native-router-flux"

import Home from './Home'

import { Leagues } from '../../services'

export class HomeContainer extends React.Component {

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

        let leagues = Leagues.Get()

        return (
            <Home
                leagues={leagues}
                crea={Actions.Create}
                join={Actions.Join}
                joinLeague={this.joinLeague.bind(this)}
            />
        )
    }
    
}
