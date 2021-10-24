import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler"
import { useSharedValue } from "react-native-reanimated"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"

function AuctionBidList({ bids }) {

	const [sortedBids, setSortedBids] = useState()	//shared value to store all the scroll Y values

	useEffect(() => {
		let sortedBids = orderByHighestBid()
		setSortedBids(sortedBids)
	}, [bids])


	const orderByHighestBid = () => {
		return bids.sort((a, b) => b.bid - a.bid)
	}


	const renderItem = ({ item }) => {
		return (
			<AuctionCard 
				name={item.name}
				bid={item.bid}
			/>
		)
	}

	return (
		<FlatList
			data={sortedBids}
			keyExtractor={bid => bid.id}
			renderItem={renderItem}
		/>
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

