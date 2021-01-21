
import React from "react"

import StartPage from './StartPage'

export class StartPageContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {

        return (
            <StartPage />
        )
    }
    
}
