import { useEffect } from "react"
import { Easing, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated"

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
 * @param {addText} string concatenate text to the value 
 * @returns 
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