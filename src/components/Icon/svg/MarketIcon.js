import PropTypes from "prop-types"
import React from "react"

import Svg, { G, Mask, Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function MarketIcon({primary, secondary, shadow, width, height, ...props}) {
	return (
		<Svg width={width} height={height} 
			viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.45459" width="50" height="50" rx="16" 
				fill={secondary} />
			<Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="50">
				<Rect x="0.45459" width="49.9093" height="50" rx="16" 
					fill={secondary} />
			</Mask>
			<G mask="url(#mask0)">
				<Path d="M50.5 34V37.5L49 41L47.8682 43L46.371 45L44.3746 46.6L40.8809 49L36.3891 50H27.5L14.5 33.5L14 26L19.919 15L21.9154 12.5L25.409 11L28.4036 12L34 14L50.5 34Z" 
					fill={shadow} />
			</G>
			<Path d="M40.3995 25.0014C40.3995 33.2843 33.6994 40 25.4267 40C17.1635 40 10.4546 33.2843 10.4546 25.0014C10.4546 16.7164 17.1636 10 25.426 10C33.6994 10 40.3995 16.7164 40.3995 25.0014" 
				fill={primary} />
			<Path d="M24.492 34.3545V32.1659C22.9662 32.1198 21.4879 31.6879 20.623 31.2085L21.3049 28.5419C22.2606 29.0661 23.6034 29.5442 25.083 29.5442C26.3797 29.5442 27.29 29.0206 27.29 28.1318C27.29 27.2653 26.5396 26.718 24.8553 26.149C22.4206 25.3273 20.7593 24.1879 20.7593 21.9769C20.7593 19.948 22.1712 18.374 24.6045 17.9197V15.7535H26.8352V17.7594C28.3589 17.8049 29.3831 18.1478 30.1564 18.5118L29.4752 21.0867C28.9059 20.8144 27.8356 20.2902 26.198 20.2902C24.7184 20.2902 24.2412 20.9509 24.2412 21.5885C24.2412 22.3178 25.0369 22.8203 26.9714 23.5265C29.7016 24.4846 30.7712 25.7388 30.7712 27.8126C30.7712 29.8409 29.36 31.5501 26.7213 32.0057V34.3545H24.4913" 
				fill={secondary} />
		</Svg>
	)
}

MarketIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	shadow: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

MarketIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	shadow: colors.blueDarkShadow,
	width: 50,
	height: 50
}

export default MarketIcon

