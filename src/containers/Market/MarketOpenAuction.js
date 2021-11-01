import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, {  useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { 
	useAnimatedGestureHandler, 
	useAnimatedStyle, 
	useSharedValue, 
	withSpring } from "react-native-reanimated"
import { Badge, Button, NumberInc, PlayerCard } from "../../components"
import Countdown from "../../components/Countdown/Countdown"
import { Players } from "../../services"
import { colors, commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { getHeaderHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import AuctionBidList from "./AuctionBidList"
import styles from "./styles"


const CARD_HEIGHT = dynamicHeight(327, 130)
const HEADER_HEIGHT = getHeaderHeight()
const END_TOP = HEADER_HEIGHT + CARD_HEIGHT
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
	const [bestBid, setBestBid] = useState(0)
	const [sessionBid, setSessionBid] = useState(0)


	const translateY = useSharedValue(0)

	useEffect(() => {
		runAuction()
		
	}, [])


	const bids = [
		{
			id: Math.random(),
			name: "Team A",
			value: 100
		},
		{
			id: Math.random(),
			name: "Team B",
			value: 15
		},
		{
			id: Math.random(),
			name: "Team C",
			value: 35
		},
		{
			id: Math.random(),
			name: "Team D",
			value: 201
		},
		{
			id: Math.random(),
			name: "Team E",
			value: 8
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

		selectedBid.value = newBestValue
		setBestBid(selectedBid)
		setSessionBid(selectedBid.value + 1)//session bid should be incremented by 1 
		console.log("[MarketOpenAuction - getRandomBids] - selectedBid", selectedBid)
		setBid(selectedBid)
	}

	const incrementSessionBid = (value) => {
		setSessionBid(prevValue => {
			return prevValue + value
		})
		console.log("[MarketOpenAuction - incrementBid] - setSessionBid", sessionBid)
	}

	const resetSessionBid = () => {
		setSessionBid(bestBid.value + 1)
		console.log("[MarketOpenAuction - incrementBid] - setSessionBid", sessionBid)
	}

	const transformSyle = useAnimatedStyle( () => {
		return {
			transform: [{ translateY: translateY.value }]
		}
	})

	const panGestureEvent = useAnimatedGestureHandler({
		onStart: (event, ctx) => {
			ctx.y = translateY.value
		},
		onActive: (event, ctx) => {
			// translate Y value will be the current scroll Y value (event.translationY) plus the 
			// the scroll Y value that was stored with the previous pan gesture
			// clamp is needed to don't go over lower or upper values
			translateY.value = clamp(event.translationY + ctx.y, snapPoints[0], snapPoints[1])
		},
		onEnd: (event) => {
			const snapValue = snap(translateY.value, event.velocityY, snapPoints[0], snapPoints[1])
			translateY.value = withSpring(snapValue)
		}
	})


	return (
		<View style={styles.container}>
			<PanGestureHandler 
				onGestureEvent={panGestureEvent}
				shouldCancelWhenOutside
			>
				{/* <ScrollView> */}
				<Animated.View style={transformSyle}>

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
						bid={bestBid.value ? bestBid.value : 0} //TODO: set current bid based on bids coming from auction
					/>

					<View style={commonStyle.separator} />

					<View style={styles.auctionBids}>
						{
							bid && <AuctionBidList
								bid={bid}
							/>
						}
					</View>
				


					{/* buttons */}
					<View style={styles.badge} >
						<Badge 
							title={"CLEAR"}
							onPress={() => resetSessionBid()}
							active={true}
							activeColor={colors.errorRed}
						/>
						<Badge 
							title={"+1"}
							onPress={() => incrementSessionBid(1)}
							active={true}
							activeColor={colors.primary}
						/>
						<Badge 
							title={"+5"}
							onPress={() => incrementSessionBid(5)}
							active={true}
							activeColor={colors.primary}
						/>
						<Badge 
							title={"+10"}
							onPress={() => incrementSessionBid(10)}
							active={true}
							activeColor={colors.primary}
						/>
					</View>
					<View>
						<NumberInc
							label={I18n.translate("your_bid")}
							value={sessionBid}
							step={1}
							min={0}
							onChange={(value) => setSessionBid(value)}
						/>
					</View>
					<View style={styles.button}>
						<Button 
							title={I18n.translate("leave")}
							size={"small"}
							type={"secondary"}
							border={true}
							onPress={() => console.log("pressed Leave")}
						/>
						<Button 
							title={"Bet " + sessionBid}
							size={"small"}
							type={"primary"}
							onPress={() => console.log("pressed Bet")}
						/>
					</View>

				</Animated.View>
			</PanGestureHandler>

			{/* </ScrollView> */}
		</View>
	)
}

MarketOpenAuction.propTypes = {

}

export default MarketOpenAuction