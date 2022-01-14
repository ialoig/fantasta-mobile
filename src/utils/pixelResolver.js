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


/**
 * 
 * @param {number} num Width of the element
 * @returns 
 */
export const dynamicWidth = (num) => {
	const width = (num / designSizeWidth) * deviceScreenWidth
	const pixel = PixelRatio.roundToNearestPixel(width)
	return pixel
}


/**
 * 
 * @param {number} width Width of the element needed to calculate the correct aspect ratio
 * @param {number} num Height of the element
 * @returns 
 */
export const dynamicHeight = (width, num) => {
	const aspectRatio = width / num
	const height = dynamicWidth(width) / aspectRatio
	const pixel = PixelRatio.roundToNearestPixel(height)
	return pixel
}

export const getBottomNavigationHeight = () => {
	return dynamicHeight(375, 84)
}