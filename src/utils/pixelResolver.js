import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native"

//Design frame size 
const designSizeWidth = 375;
const designSizeHeight = 812;

//Device screen size
export const { width: deviceScreenWidth, height: deviceHeight } = Dimensions.get("window");

export const deviceScreenHeight = 
    isIphoneXor11 ? deviceHeight * 0.9 : 
    Platform.OS === "android" ? deviceHeight - StatusBar.currentHeight :
    deviceHeight;


/**
 * @method isIphoneXor11: true if devide is Iphone X or Iphone 11 Pro Max
 * 
 */
const isIphoneXor11 = () => {
    const dim = Dimensions.get("window");
    return (Platform.OS == "ios" && (!Platform.isPad && !Platform.isTV && !Platform.isTV) &&
        (dim.height === 812 || dim.width === 812 || dim.height === 896 || dim.width === 896)
    ) 
}


/**
 * @method getWidth: Return width in pixel calculated on device screen
 * @param {number} num Width in number
 */
export const getWidth = (num) => {
    const calculatedWidth = (num / designSizeWidth) * deviceScreenWidth
    const pixel = PixelRatio.roundToNearestPixel(calculatedWidth);
    return pixel;
}


/**
 * @method getHeight: Return height in pixel calculated on device screen
 * @param {number} num Height in number
 */
export const getHeight = (num) => {
    const calculatedHeight = (num / designSizeHeight) * deviceScreenHeight
    const pixel = PixelRatio.roundToNearestPixel(calculatedHeight);
    return pixel;
}