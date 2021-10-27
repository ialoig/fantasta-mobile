import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"

function AuctionBidList({ bids }) {

	const [listOfBids, setListOfBids] = useState([])

	useEffect(() => {
		let sortedBids = orderByHighestBid()
		setListOfBids(sortedBids)
	}, [bids])


	const orderByHighestBid = () => {
		return bids.sort((a, b) => b.bid - a.bid)
	}


	return (
		<ScrollView>
			{
				listOfBids.map( item => {
					return (
						<AuctionCard 
							key={item.id}
							name={item.name}
							bid={item.bid}
						/>
					)
				})
			}
		</ScrollView>
	)
}

AuctionBidList.propTypes = {
	bids: PropTypes.array
}

AuctionBidList.defaultProps = {
	bids: [
		{
			id: 1,
			name: "Team A",
			bid: "20"
		},
		{
			id: 2,
			name: "Team B",
			bid: "40"
		},
		{
			id: 3,
			name: "Team C",
			bid: "15"
		},
	]
}

export default AuctionBidList

