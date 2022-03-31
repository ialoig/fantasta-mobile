import { useEffect } from "react"
import { Easing, useDerivedValue, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated"

/**
 * @summary define a value between the upper and lower bound
 * @param {*} value current value
 * @param {*} lowerBound lower limit
 * @param {*} upperBound upper limit
 * @example clamp(101, 0, 100); // 100
 * @returns 
 */
export const clamp = (value, lowerBound, upperBound) => {
	"worklet" //https://docs.swmansion.com/react-native-reanimated/docs/next/worklets/
	return Math.min(Math.max(lowerBound, value), upperBound)
}


/*
 * Calculate where the animation should snap between checkOne or checkTwo value starting 
 * from the current value and the velocity passed by
 * @param {*} value current value
 * @param {*} velocity velocity of the current value
 * @param {*} checkOne upper bound
 * @param {*} checkTwo lower bound
 * @returns 
 */
export const snap = (value, velocity, checkOne, checkTwo) => {
	"worklet" //https://docs.swmansion.com/react-native-reanimated/docs/next/worklets/
	const point = value + 0.5 * velocity
	const getCloser = Math.abs(point - checkOne) < Math.abs(point - checkTwo) ? 
		checkOne : 
		checkTwo
	return getCloser
}


/**
 * 
 * @param {toValue} number the value where animation should stops 
 * @param {addText} string additional text to concatenate with the value 
 * @returns animated text
 */
export const animateTextValue = (toValue, addText) => {
	const progress = useSharedValue(0)
	
	progress.value = withTiming(toValue, {
		duration: 1000,
		easing: Easing.linear //https://easings.net
	})

	addText = addText ? addText : ""

	return useDerivedValue( () => {
		return Math.round(progress.value) + addText
	}, [toValue])
}


/**
 * Create a opacity animation based on parameters passed by
 * 
 * @param {Number} delay in ms
 * @param {Number} numOfReps number of repetitions (-1 for infinite loop)
 * @param {Number} duration in ms
 * @returns Opacity value
 */
export const opacityAnimation = (delay, numOfReps, duration) => {

	const animOpacity = useSharedValue(0)

	useEffect(() => {
		animOpacity.value = 
		withDelay(delay, 
			withRepeat(
				withTiming(1, { 
					duration: duration, 
					easing: Easing.inOut(Easing.ease) 
				}), 
				numOfReps, true)
		)
	}, [delay, numOfReps, duration])


	return useDerivedValue( () => {
		return animOpacity.value
	}, [])
}