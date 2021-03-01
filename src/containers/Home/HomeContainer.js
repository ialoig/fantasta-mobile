
import React from "react"
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
                this.props.navigation.navigate("Dashboard");
            }
            catch (error) {/*error handling done in Leagues.Join*/}
        }
    }

    render () {
        return (
            <Home
                {...this.props}
                leagues={this.state.leagues}
                crea={() => this.props.navigation.navigate("CreateLeague")}
                join={() => this.props.navigation.navigate("JoinLeague")}
                account={() => this.props.navigation.navigate("AccountNavigator")}
                joinLeague={this.joinLeague.bind(this)}
            />
        )
    }
    
}
