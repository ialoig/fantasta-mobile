
import { loadAsync } from "expo-font";

const LoadFonts = async () =>
{
    return loadAsync({
        PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
        PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf")
    })
}

const Init = async () =>
{
    Promise.all([
        LoadFonts(),
    ])
    .then(
        () => {
            return Promise.resolve()
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    
    return Promise.resolve()


}

export default Init