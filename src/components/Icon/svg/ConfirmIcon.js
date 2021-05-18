import PropTypes from "prop-types"
import React from "react"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function ConfirmIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.54541" width="120" height="120" rx="40" 
				fill={secondary} />
			<Path d="M89.2601 59.8599C89.2601 59.0216 89.0601 58.2349 88.7251 57.5199C86.4901 50.3099 76.0267 50.8366 61.1434 50.4849C58.6551 50.4266 60.0784 47.4883 60.9517 41.0383C61.5201 36.8433 58.8151 30.4016 54.2684 30.4016C46.7717 30.4016 53.9834 36.3149 47.3551 50.9383C43.8134 58.7516 35.8967 54.3749 35.8967 62.2233V80.0883C35.8967 83.1433 36.1967 86.0799 40.4934 86.5633C44.6584 87.0316 43.7217 89.9999 49.7301 89.9999H79.8034C82.8667 89.9999 85.3584 87.5066 85.3584 84.4433C85.3584 83.1733 84.9134 82.0166 84.1951 81.0799C85.8951 80.1283 87.0617 78.3316 87.0617 76.2483C87.0617 74.9816 86.6184 73.8249 85.9017 72.8899C87.6067 71.9399 88.7767 70.1416 88.7767 68.0549C88.7767 66.5399 88.1634 65.1666 87.1751 64.1616C88.4367 63.1433 89.2601 61.6033 89.2601 59.8599Z" 
				fill={primary} />
			<Path d="M69.3668 65.4151H83.7068C85.6568 65.4151 87.4868 64.3717 88.4834 62.6934C88.8934 62.0017 88.6651 61.1067 87.9718 60.6951C87.2801 60.2834 86.3851 60.5151 85.9734 61.2067C85.5018 62.0051 84.6301 62.4984 83.7051 62.4984H69.0218C67.5668 62.4984 66.3834 61.3151 66.3834 59.8601C66.3834 58.4051 67.5668 57.2217 69.0218 57.2217H78.8334C79.6384 57.2217 80.2918 56.5684 80.2918 55.7634C80.2918 54.9584 79.6384 54.3051 78.8334 54.3051H69.0201C65.9568 54.3051 63.4651 56.7967 63.4651 59.8601C63.4651 61.5684 64.2568 63.0801 65.4734 64.1001C64.4484 65.1084 63.8101 66.5084 63.8101 68.0551C63.8101 69.7684 64.6068 71.2851 65.8301 72.3034C64.8118 73.3101 64.1801 74.7051 64.1801 76.2484C64.1801 78.1151 65.1118 79.7617 66.5284 80.7701C65.6551 81.7517 65.1084 83.0301 65.1084 84.4434C65.1084 87.5067 67.6001 89.9984 70.6634 89.9984H79.8034C81.7534 89.9984 83.5851 88.9567 84.5818 87.2784C84.9934 86.5867 84.7651 85.6917 84.0734 85.2801C83.3801 84.8717 82.4851 85.0967 82.0751 85.7884C81.6001 86.5867 80.7284 87.0817 79.8034 87.0817H70.6634C69.2084 87.0817 68.0251 85.8984 68.0251 84.4434C68.0251 82.9884 69.2084 81.8051 70.6634 81.8051H81.5068C83.4568 81.8051 85.2901 80.7617 86.2851 79.0834C86.6968 78.3901 86.4684 77.4951 85.7768 77.0851C85.0784 76.6667 84.1868 76.9017 83.7784 77.5934C83.2968 78.4051 82.4468 78.8884 81.5068 78.8884H69.7351C68.2801 78.8884 67.0968 77.7034 67.0968 76.2484C67.0968 74.7934 68.2801 73.6101 69.7351 73.6101H83.2201C85.1701 73.6101 87.0018 72.5684 87.9984 70.8901C88.4101 70.1984 88.1818 69.3034 87.4901 68.8917C86.7951 68.4817 85.9018 68.7084 85.4918 69.4001C85.0101 70.2101 84.1601 70.6934 83.2201 70.6934H69.3668C67.9118 70.6934 66.7284 69.5101 66.7284 68.0551C66.7284 66.6001 67.9101 65.4151 69.3668 65.4151Z" 
				fill={secondary} />
		</Svg>
	)
}

ConfirmIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

ConfirmIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 120,
	height: 120
}

export default ConfirmIcon

