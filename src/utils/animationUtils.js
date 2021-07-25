
/**
 * @summary define a value between the upper and lower bound
 * @param {*} value current value
 * @param {*} lowerBound lower limit
 * @param {*} upperBound upper limit
 * @example clamp(101, 0, 100); // 100
 * @returns 
 */
export const clamp = (value, lowerBound, upperBound) => {
	"worklet"
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
	"worklet"
	const point = value + 0.5 * velocity
	const getCloser = Math.abs(point - checkOne) < Math.abs(point - checkTwo) ? 
		checkOne : 
		checkTwo
	return getCloser
}
