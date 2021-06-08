import PropTypes from "prop-types"
import React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"
import colors from "../../../../styles/colors"

function AttRoleIcon ({ width, height, primary, secondary, roleColor }) {
	return (
		<Svg width={width} height={height} 
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/Svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Circle cx="25" cy="15" r="8" 
				fill={primary} />
			<Path d="M38.5962 34.6978C38.3381 34.1078 37.9694 33.5178 37.5268 33.0015C37.195 32.6328 36.8262 32.3009 36.4206 32.0059C36.015 31.7109 35.5724 31.4896 35.0931 31.3421C34.4662 31.1209 33.8024 30.9734 33.1387 30.9734C32.3643 30.9734 31.6268 31.084 30.8893 31.3421C30.5943 31.4528 30.3361 31.5634 30.0411 31.7478C29.3036 32.1534 28.6767 32.7065 28.1605 33.4072C28.1236 33.4809 28.0499 33.5178 28.013 33.5915C27.9024 33.739 27.8286 33.8865 27.7549 34.034C27.3492 34.7716 27.0911 35.5459 27.0173 36.3203C26.9805 36.6153 26.9805 36.9103 26.9805 37.2422C27.0173 38.1272 27.2386 39.0122 27.6442 39.7866C27.8286 40.1554 28.0867 40.5241 28.3449 40.856C28.6767 41.2616 29.0824 41.6673 29.5617 41.9623C30.0411 42.2941 30.5205 42.5154 31.0368 42.6998C31.4424 42.8473 31.8849 42.921 32.2905 42.9579C33.1755 43.0685 34.0606 42.9579 34.9087 42.6629C35.2037 42.5523 35.4618 42.4416 35.7568 42.2941C36.4575 41.9254 37.0843 41.4091 37.6006 40.7823C37.7112 40.6348 37.8218 40.5241 37.8956 40.3766C37.9325 40.3029 37.9693 40.2291 38.0062 40.1554C38.4487 39.4179 38.7437 38.6066 38.8544 37.7953C38.8912 37.5003 38.9281 37.1685 38.9281 36.8735C39.0387 36.136 38.8912 35.3984 38.5962 34.6978ZM28.013 34.6241L27.9024 35.9147L27.5336 36.0991C27.6442 35.6197 27.7917 35.1034 28.013 34.6241ZM29.5986 39.3072L28.308 39.9341C27.7917 39.0491 27.4967 38.0535 27.4967 37.0578L28.308 36.6522L29.7093 37.611L29.5986 39.3072ZM30.0043 32.8909L28.7505 33.4809C29.1192 33.0384 29.5617 32.6328 30.0411 32.3378L30.0043 32.8909ZM30.8893 31.8953C31.8112 31.4896 32.8437 31.379 33.8762 31.5265L33.7655 33.1859L32.2168 33.9234L30.8155 32.9647L30.8893 31.8953ZM30.373 39.381L30.4836 37.6847L32.0324 36.9472L33.4337 37.906L33.323 39.6022L31.7743 40.3397L30.373 39.381ZM35.0562 42.1835C34.0974 42.5523 33.0649 42.6629 32.0693 42.4785L32.1799 41.0404L33.7287 40.3029L35.1299 41.2616L35.0562 42.1835ZM35.4249 36.5416L33.8762 37.2791L32.4749 36.3203L32.5855 34.6241L34.1343 33.8865L35.5356 34.8453L35.4249 36.5416ZM35.9043 41.7779L35.9412 41.3723L37.1212 40.8191C36.7525 41.1879 36.3468 41.5198 35.9043 41.7779ZM37.8956 39.7129L38.0062 38.3116L38.4856 38.0903C38.375 38.6435 38.1906 39.1966 37.8956 39.7129ZM37.6375 37.611L36.2362 36.6522L36.3468 34.9559L37.8587 34.2184C38.375 35.1034 38.6331 36.0991 38.5962 37.1316L37.6375 37.611Z" 
				fill={roleColor} />
			<Path d="M37.2273 40.114V40.0771C37.2273 40.0771 37.1905 40.0772 37.2273 40.114Z" 
				fill={primary} />
			<Path d="M25.4639 36.2791C25.4639 35.9473 25.4639 35.6154 25.5008 35.2835C25.6114 34.4354 25.8695 33.5504 26.312 32.776C26.3858 32.6285 26.4964 32.4441 26.607 32.2966C26.6439 32.2228 26.7177 32.1491 26.7545 32.0753C27.3077 31.301 28.0452 30.7109 28.8196 30.2684C29.1146 30.0841 29.4096 29.9734 29.7415 29.8259C30.5158 29.5309 31.364 29.3834 32.1752 29.4203C32.9127 29.4203 33.6134 29.5678 34.314 29.8259C34.7934 30.0103 35.3096 30.2316 35.7521 30.5634C36.1947 30.8584 36.6003 31.2272 36.969 31.6328C37.0797 31.7435 37.1534 31.8541 37.2272 31.9647V29.6047C37.2272 25.8065 34.1665 22.7458 30.3683 22.7458H29.9627C28.6721 23.889 26.9758 24.5896 25.132 24.5896C23.2882 24.5896 21.592 23.889 20.3013 22.7458H19.8588C16.0607 22.7458 13 25.8065 13 29.6047V40.1142H25.0951H26.8652C26.607 39.7823 26.3858 39.4504 26.1645 39.0817C25.7589 38.1967 25.5008 37.2379 25.4639 36.2791Z" 
				fill={primary} />
		</Svg>

	)
}


AttRoleIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	roleColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

AttRoleIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	roleColor: colors.att,
	width: 50,
	height: 50
}


export default AttRoleIcon