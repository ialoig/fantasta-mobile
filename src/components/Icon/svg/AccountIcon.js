import PropTypes from "prop-types"
import React from "react"

import Svg, { Path } from "react-native-svg"
import colors from "../../../styles/colors"

function AccountIcon({color, ...props}) {
	return (
		<Svg {...props} width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 2.68182C9.10161 2.68182 7.63636 4.14707 7.63636 5.95455C7.63636 7.76202 9.10161 9.22727 10.9091 9.22727C12.7166 9.22727 14.1818 7.76202 14.1818 5.95455C14.1818 4.14707 12.7166 2.68182 10.9091 2.68182ZM5.45455 5.95455C5.45455 2.94208 7.89663 0.5 10.9091 0.5C13.9216 0.5 16.3636 2.94208 16.3636 5.95455C16.3636 8.96701 13.9216 11.4091 10.9091 11.4091C7.89663 11.4091 5.45455 8.96701 5.45455 5.95455ZM0 23.4091C0 17.3842 4.88418 12.5 10.9091 12.5C16.934 12.5 21.8182 17.3842 21.8182 23.4091C21.8182 24.0116 21.3298 24.5 20.7273 24.5C20.1248 24.5 19.6364 24.0116 19.6364 23.4091C19.6364 18.5892 15.729 14.6818 10.9091 14.6818C6.08917 14.6818 2.18182 18.5892 2.18182 23.4091C2.18182 24.0116 1.6934 24.5 1.09091 24.5C0.488417 24.5 0 24.0116 0 23.4091Z" 
				fill={color ? color : colors.text}
			/>
		</Svg>
	)
}

AccountIcon.propTypes = {
	color: PropTypes.string
}

export default AccountIcon

