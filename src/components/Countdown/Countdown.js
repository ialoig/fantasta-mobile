import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { textStyles } from "../../styles"
import styles from "./styles"

function Countdown({ minutes, seconds, restart }) {

	const [timerInSeconds, setTimerInSeconds] = useState(0)

	useEffect( () => {

		getTimerInSeconds()

		let interval = setInterval( () => {
			setTimerInSeconds(prevTime => {
				if (prevTime <= 1) {
					clearInterval(interval)
				}
				return prevTime - 1
			})
		}, 1000)

		//cleanup the interval on complete
		//if we unmount the component before clearInterval is called, there is a memory leak because 
		//the interval is set when we start and the timer is not stopped.
		return () => clearInterval(interval)

	}, [restart])



	/** calculate timer in seconds based on minutes and seconds passed by props */
	const getTimerInSeconds = () => {
		let tempTimerInSeconds = 0
		if (minutes && minutes >0) {
			tempTimerInSeconds = minutes * 60
		}
		if (seconds && seconds >0) {
			tempTimerInSeconds += seconds
		}
		console.log("[Countdown] - getTimerInSeconds:", tempTimerInSeconds)			
		setTimerInSeconds(tempTimerInSeconds)
	}

	/**
	 * 
	 * @returns time left as object of minutes and seconds formatted with two digits
	 */
	const getTimeLeft = () => {
		let minutes = parseInt(timerInSeconds / 60, 10) % 60
		let seconds = timerInSeconds % 60
        
		//formatting number with two digits
		return {
			minutes: minutes.toString().padStart(2, "0"),
			seconds: seconds.toString().padStart(2, "0")
		}
	}

	const renderTimer = () => {
		const { minutes, seconds } = getTimeLeft()
		return (
			<>
				<View style={styles.timer}>
					<Text style={[textStyles.title, styles.countdown_text]}>
						{minutes}
					</Text>
				</View>
				<Text style={[textStyles.title, styles.countdown_text]}>
					{":"}
				</Text>
				<View style={styles.timer}>
					<Text style={[textStyles.title, styles.countdown_text]}>
						{seconds}
					</Text>
				</View>
			</>
		)
	}

	return (
		<View style={styles.countdown}>
			{renderTimer()}
		</View>
	)
}



Countdown.propTypes = {
	minutes: PropTypes.number.isRequired,
	seconds: PropTypes.number.isRequired,
	restart: PropTypes.number
}

Countdown.defaultProps = {
	minutes: 0,
	seconds: 30
}

export default Countdown
