import { Dimensions, Platform, StatusBar } from "react-native"

//Device Os 
export const ios = Platform.OS === "ios" ? true : false
export const android = Platform.OS === "android" ? true : false

//Device screen size
export const { width: deviceScreenWidth, height: deviceHeight } = Dimensions.get("window")


export const deviceScreenHeight = 
    isIphoneXor11 ? (deviceHeight * 0.9) : android ? (deviceHeight - StatusBar.currentHeight) : deviceHeight


export const getHeaderHeight = () => {
	let headerHeight
	
	if (Platform.OS === "ios") {
		headerHeight = 44
	} else if (Platform.OS === "android") {
		headerHeight = 56
	} else {
		headerHeight = 64
	}
	headerHeight += StatusBar.currentHeight + 20 //total height = 100 (same as navigator header)
	
	return headerHeight
}

/**
 * @method isIphoneXor11: true if devide is Iphone X or Iphone 11 Pro Max
 * 
 */
const isIphoneXor11 = () => {
	const dim = Dimensions.get("window")
	return (ios && (!Platform.isPad && !Platform.isTV && !Platform.isTV) &&
        (dim.height === 812 || dim.width === 812 || dim.height === 896 || dim.width === 896)
	) 
}