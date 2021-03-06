
import { loadAsync } from "expo-font"

const init = () =>
{
	return loadAsync({
		PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
		PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
		PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
		PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
		PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf")
	})
}

export const Fonts = {
	init
}