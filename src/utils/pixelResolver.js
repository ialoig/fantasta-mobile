import { PixelRatio } from "react-native"
import { deviceScreenHeight, deviceScreenWidth } from "./deviceUtils"

//Design frame size 
const designSizeWidth = 375
const designSizeHeight = 812


/**
 * @method getWidth: Return width in pixel calculated on device screen
 * @param {number} num Width in number
 */
export const getWidth = (num) => {
	const calculatedWidth = (num / designSizeWidth) * deviceScreenWidth
	const pixel = PixelRatio.roundToNearestPixel(calculatedWidth)
	return pixel
}


/**
 * @method getHeight: Return height in pixel calculated on device screen
 * @param {number} num Height in number
 */
export const getHeight = (num) => {
	const calculatedHeight = (num / designSizeHeight) * deviceScreenHeight
	const pixel = PixelRatio.roundToNearestPixel(calculatedHeight)
	return pixel
}