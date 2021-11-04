import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import usePrevious from "../../utils/hooks"

function AuctionBidList({ bid }) {

	const [listOfBids, setListOfBids] = useState([])
	const prevListOfBids = usePrevious(listOfBids)

	useEffect( () => {
		console.log("[AuctionBidList] - useEffect - bid from props: ", bid)

		setBid()
	}, [bid])


	const setBid = () => {
		let tempList = prevListOfBids ?  [...prevListOfBids] : []
		console.log("[AuctionBidList] - setBid - tempList before: ", tempList)

		tempList.unshift(bid) //Add a bid to the beginning of the list
		setListOfBids(tempList.slice(0, 3))
	}


	//check if it's a new bid coming from the same user or if it's just the same 
	const isNewBid = (item) => {
		console.log("[AuctionBidList] - isNewBid ?", item)

		let found = prevListOfBids.find( prevItem => {
			return prevItem._id === item._id
		})
		if (found && found.value === item.value) {
			// console.log("[AuctionBidList] - found bid same team", found.name, found.value)
			// console.log("[AuctionBidList] - isNewBid ? false ", item.name, item.value)
			return false
		}
		return true
	}


	return (
		<View>
			{
				listOfBids.map( ( item, index ) => {
					if (index >= 3) 
						return

					return (
						<AuctionCard 
							key={item._id + "" + Math.random()} // there might be same team but with different bid
							name={item.name}
							bid={item.value}
							isNewBid={isNewBid(item)}
							topBid={index === 0}
						/>
					)
				})
			}
		</View>
	)
}

AuctionBidList.propTypes = {
	bid: PropTypes.object
}

AuctionBidList.defaultProps = {
}

export default AuctionBidList
