import { deviceScreenWidth } from "../../utils/deviceUtils"


//define half screen size based on card dimensions
export const MAX_WIDTH = 
    (deviceScreenWidth / 2) /** half screen */ - (deviceScreenWidth * 0.06) /** padding screen */
