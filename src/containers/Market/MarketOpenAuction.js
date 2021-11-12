import { useNavigation, useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, {  useEffect, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { 
	useAnimatedGestureHandler, 
	useAnimatedStyle, 
	useSharedValue, 
	withSpring } from "react-native-reanimated"
import { Badge, Button, NumberInc, PlayerCard } from "../../components"
import Countdown from "../../components/Countdown/Countdown"
import { Leagues, Players, User } from "../../services"
import { colors, commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { getHeaderHeight } from "../../utils/deviceUtils"
import usePrevious from "../../utils/hooks"
import { dynamicHeight } from "../../utils/pixelResolver"
import AuctionBidList from "./AuctionBidList"
import styles from "./styles"


const CARD_HEIGHT = dynamicHeight(327, 130)
const HEADER_HEIGHT = getHeaderHeight()
const END_TOP = HEADER_HEIGHT + CARD_HEIGHT
const snapPoints = [-END_TOP, 0]

function MarketOpenAuction() {

	const { goBack } = useNavigation()
	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.getPlayersByID(playerID))
	const [team, setTeam] = useState(Leagues.getMyTeam(User.get().username))
	const [bestBid, setBestBid] = useState()
	const historyBid = usePrevious(bestBid)
	const [sessionValue, setSessionValue] = useState(1)


	const translateY = useSharedValue(0)

	useEffect(() => {
		const myTeam = Leagues.getMyTeam(User.get().username)
		setTeam(myTeam)
		
		if (!bestBid) {
			runAuction()
		}
		
	}, [])


	// TODO: remove after auction implementation
	const bids = [
		{
			_id: 1,
			name: "Team A",
			value: 100
		},
		{
			_id: 2,
			name: "Team B",
			value: 15
		},
		{
			_id: 3,
			name: "Team C",
			value: 35
		},
		{
			_id: 4,
			name: "Team D",
			value: 201
		},
		{
			_id: 5,
			name: "Team E",
			value: 8
		},
	]


	const runAuction = () => {
		setTimeout(() => {
			const selectedBid = getRandomBids()
			setBestBid(selectedBid)
			setSessionValue(selectedBid.value + 1)//session bid should be incremented by 1 
		}, 1000)
	}


	//TODO: to be deleted after bid implementation
	const randomNumberFromRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min )
	}
	

	//TODO: just for debug purpose.
	const getRandomBids = () => {
		const randomIndex = randomNumberFromRange(0, 3)
		const selectedBid = bids[randomIndex]
		
		let localBestValue = 1
		console.log("[MarketOpenAuction - getRandomBids] - historyBid:", historyBid)
		if (historyBid) {
			console.log("[MarketOpenAuction - getRandomBids] - prev best value:", historyBid.value)
			localBestValue = historyBid.value
		}
		let newBestValue = randomNumberFromRange(localBestValue, 500)

		selectedBid.value = newBestValue
		console.log("[MarketOpenAuction - getRandomBids] - selectedBid:", selectedBid)
		return selectedBid
	}


	// TODO: ⚠️  when pressed, coundown is restarted. 
	// Also auction bid list looks as a new bid has been sent (animation of the top bid).
	// need an analysis after event service implementation
	const incrementSessionValue = (value) => {
		setSessionValue(prevValue => {
			return prevValue + value
		})
		console.log("[MarketOpenAuction - incrementSessionValue] - setSessionValue:", sessionValue)
	}


	const resetSessionValue = () => {
		setSessionValue(bestBid.value + 1)
		console.log("[MarketOpenAuction - resetSessionValue] - setSessionValue:", sessionValue)
	}


	const bet = () => {
		console.log("[MarketOpenAuction - bet] - value:", sessionValue)
		const localBid = {
			_id: team._id,
			name: team.name,
			value: sessionValue
		}
		setBestBid(localBid)
		setSessionValue(sessionValue + 1)//session bid should be incremented by 1 
		
		runAuction()// TODO: remove after implementation of auction
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
						bid={bestBid?.value ? bestBid.value : 0} //TODO: set current bid based on bids coming from auction
					/>

					<View style={commonStyle.separator} />

					<View style={styles.auctionBids}>
						{
							bestBid && <AuctionBidList
								bid={bestBid}
							/>
						}
					</View>

					{/* buttons */}
					<View style={styles.badge} >
						<Badge 
							title={"CLEAR"}
							onPress={() => resetSessionValue()}
							active={true}
							activeColor={colors.errorRed}
						/>
						<Badge 
							title={"+1"}
							onPress={() => incrementSessionValue(1)}
							active={true}
							activeColor={colors.primary}
						/>
						<Badge 
							title={"+5"}
							onPress={() => incrementSessionValue(5)}
							active={true}
							activeColor={colors.primary}
						/>
						<Badge 
							title={"+10"}
							onPress={() => incrementSessionValue(10)}
							active={true}
							activeColor={colors.primary}
						/>
					</View>
					<View>
						<NumberInc
							label={I18n.translate("your_bid")}
							value={sessionValue}
							step={1}
							min={0}
							onChange={(value) => setSessionValue(value)}
						/>
					</View>
					<View style={styles.button}>
						<Button 
							title={I18n.translate("leave")}
							size={"small"}
							type={"secondary"}
							border={true}
							onPress={() => goBack()}
						/>
						<Button 
							title={I18n.translate("bet") + " " + sessionValue}
							size={"small"}
							type={"primary"}
							onPress={() => bet()}
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