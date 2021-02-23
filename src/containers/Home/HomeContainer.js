
import React from "react"
import { Actions } from "react-native-router-flux"
import Home from './Home'
import { Leagues, Error } from '../../services'

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
            catch (error) {}
        }
    }

    render () {
        return (
            <Home
                leagues={this.state.leagues}
                crea={Actions.Create}
                join={Actions.JoinLeague}
                joinLeague={this.joinLeague.bind(this)}
            />
        )
    }
    
}
