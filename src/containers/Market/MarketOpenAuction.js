import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import { clamp } from "lodash"
import PropTypes from "prop-types"
import React, {  useEffect, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { 
	useAnimatedGestureHandler, 
	useAnimatedStyle, 
	useSharedValue, 
	withSpring } from "react-native-reanimated"
import { Badge, PlayerCard } from "../../components"
import Countdown from "../../components/Countdown/Countdown"
import { style } from "../../components/Icon/svg/CreateLeagueIcon"
import { Players } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import { snap } from "../../utils/animationUtils"
import { getHeaderHeight, getMaxHeader } from "../../utils/deviceUtils"
import AuctionBidList from "./AuctionBidList"
import styles from "./styles"


const MAX_HEADER = getMaxHeader()
const HEADER_HEIGHT = getHeaderHeight()
const END_TOP = MAX_HEADER + HEADER_HEIGHT
const snapPoints = [-END_TOP, 0]

function MarketOpenAuction() {


	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.GetPlayersByID(playerID))
	const [bid, setBid] = useState()
	const [bestBid, setBestBid] = useState()


	const translateY = useSharedValue(0)

	useEffect(() => {
		runAuction()
		
	}, [])


	const bids = [
		{
			id: Math.random(),
			name: "Team A",
			value: "100"
		},
		{
			id: Math.random(),
			name: "Team B",
			value: "15"
		},
		{
			id: Math.random(),
			name: "Team C",
			value: "35"
		},
		{
			id: Math.random(),
			name: "Team D",
			value: "201"
		},
		{
			id: Math.random(),
			name: "Team E",
			value: "8"
		},
	]


	const runAuction = () => {
		let count = 3
		let interval = setInterval( () => {
			getRandomBids()
			if (--count === 0 )
				clearInterval(interval)
		}, 2000)
	}

	//TODO: to be deleted after bid implementation
	const randomNumberFromRange = (min, max) => {
		return Math.floor(Math.random() * (max-min+1) + min )
	}
	
	//TODO: just for debug purpose.
	const getRandomBids = () => {
		const randomIndex = randomNumberFromRange(0, 3)
		const selectedBid = bids[randomIndex]
		
		let localBestValue = 1
		if (bestBid) {
			localBestValue = bestBid.value
		}
		console.log("[MarketOpenAuction - getRandomBids] - best value:", localBestValue)
		let newBestValue = randomNumberFromRange(localBestValue, 1000)
		console.log("[MarketOpenAuction - getRandomBids] - new best value :", newBestValue)

		selectedBid.value = newBestValue.toString()
		setBestBid(selectedBid)
		console.log("[MarketOpenAuction - getRandomBids] - selectedBid", selectedBid)
		setBid(selectedBid)
	}

	const transformSyle = useAnimatedStyle( () => {
		return {
			transform: [{ translateY: translateY.value }]
		}
	})

	const panGestureEvent = useAnimatedGestureHandler({
		onStart: (event, ctx) => {
			ctx.y = translateY.value
			console.log("panGestureEvent - onStart", translateY.value)
		},
		onActive: (event, ctx) => {
			// translate Y value will be the current scroll Y value (event.translationY) plus the 
			// the scroll Y value that was stored with the previous pan gesture
			// clamp is needed to don't go over lower or upper values
			console.log("panGestureEvent - onActive", translateY.value)
			translateY.value = clamp(event.translationY + ctx.y, snapPoints[0], snapPoints[1])
		},
		onEnd: (event) => {
			console.log("panGestureEvent - onEnd", translateY.value)
			const snapValue = snap(translateY.value, event.velocityY, snapPoints[0], snapPoints[1])
			translateY.value = withSpring(snapValue)
		}
	})
	

	return (
		<View style={styles.container}>
			{/* <PanGestureHandler 
				onGestureEvent={panGestureEvent}
				// waitFor={flatRef}
				shouldCancelWhenOutside
			> */}
			<View style={transformSyle}>

				<View style={styles.countdown_container}>
					<Text style={textStyles.h2}>
						{I18n.translate("auction_countdown")}
					</Text>
					<Countdown 
						minutes={0}
						seconds={10}
						restart={Math.random()}
					/>
				</View>

				<PlayerCard
					type="auction"
					name={player.name}
					isClassic={isClassic}
					roles={isClassic ?  [...player.roleClassic] : player.roleMantra}
					team={player.team}
					quotation={player.initialPrice}
					bid={0} //TODO: set current bid based on bids coming from auction
				/>


				{
					bid && <AuctionBidList
						bid={bid}
					/>
				}
				
				<View style={commonStyle.separator} />


				{/* buttons */}
				<View style={styles.console} >
					<Badge 
						title={"CLEAR"}
						onPress={() => console.log("pressed CLEAR")}
					/>
					<Badge 
						title={"+1"}
						onPress={() => console.log("pressed +1")}
					/>
					<Badge 
						title={"+5"}
						onPress={() => console.log("pressed +5")}
					/>
					<Badge 
						title={"+10"}
						onPress={() => console.log("pressed +10")}
					/>
				</View>

			</View>
			{/* </PanGestureHandler> */}
		</View>
	)
}

MarketOpenAuction.propTypes = {

}

export default MarketOpenAuction