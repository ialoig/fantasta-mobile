import { Dimensions, Platform, StatusBar } from "react-native"

//Device Os 
export const ios = Platform.OS === "ios" ? true : false
export const android = Platform.OS === "android" ? true : false

//Device screen size
export const { width: deviceScreenWidth, height: deviceHeight } = Dimensions.get("window")

export const deviceScreenHeight = 
    isIphoneXor11 ? (deviceHeight * 0.9) : android ? (deviceHeight - StatusBar.currentHeight) : deviceHeight



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