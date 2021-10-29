import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"

function AuctionBidList({ bid }) {

	const [listOfBids, setListOfBids] = useState([])
	const prevListOfBids = usePrevious(listOfBids)

	useEffect(() => {
		setBid()
	}, [bid])


	const setBid = () => {
		console.log("[AuctionBidList] - setBid - prevListOfBids : ", prevListOfBids)
		let tempList = prevListOfBids ?  [...prevListOfBids] : []
		console.log("[AuctionBidList] - setBid - tempList before: ", tempList)
		const numOfBids = tempList.length ? tempList.length : 0
		if (tempList.length < 3) {
			const numOfEmptyBids = 3 - numOfBids
			for (let i=0; i<=numOfEmptyBids; i++) {
				const emptyBid = getEmptyBid()
				tempList.push(emptyBid) // Add a bid to the end of the list
			}
		}
		tempList.unshift(bid) //Add a bid to the beginning of the list
		tempList = tempList.slice(0, 3)
		console.log("[AuctionBidList] - setBid - tempList after: ", tempList)
		setListOfBids(tempList)
	}

	const getEmptyBid = () => {
		return {
			id: Math.random(),
			name: "",
			bid: ""
		}
	}



	return (
		<View>
			{
				listOfBids.map( ( item, index ) => {
					if (index >= 3) 
						return

					const found = prevListOfBids.find( item => item.bid)

					return (
						<AuctionCard 
							key={Math.random()}
							name={item.name}
							bid={item.bid}
							hasChanged={found != undefined}
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



function usePrevious (value) {
	const ref = useRef()

	useEffect(() => {
		console.log("[usePrevious] value:", value)
		ref.current = value
	}, [value])

	return ref.current
} 
