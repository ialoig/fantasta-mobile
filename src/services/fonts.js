
import { loadAsync } from "expo-font";

const Init = () =>
{
    return loadAsync({
        PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
        PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf")
    })
}

export const Fonts = {
    Init
}