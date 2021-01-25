
import React from "react"

import Auction from './Auction'

export class AuctionContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Auction />
        )
    }
    
}
