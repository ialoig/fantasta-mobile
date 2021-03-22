import PropTypes from "prop-types"
import React from "react"

import Svg, { G, Mask, Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function CreateLeagueIcon({color, ...props}) {
	return (
		<Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/Svg">
			<Rect width="40" height="40" rx="16" 
				fill="#3E5481"/>
			<Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
				<Rect width="50" height="50" rx="16" 
					fill="#3E5481"/>
			</Mask>
			<G mask="url(#mask0)">
				<Path d="M25.5 12L36.5 15L37 16L51.5 40.5L40 50H26L14.5 29L14 16.5L19.5 14L25.5 12Z" 
					fill="#314163"/>
			</G>
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M25.1552 11.0501C25.384 10.9833 25.6271 10.9833 25.8559 11.0501L37.1005 14.3349C37.6336 14.4906 38 14.9794 38 15.5348V22.2711C38 29.8895 33.1245 36.6529 25.8968 39.0612C25.6403 39.1467 25.3631 39.1467 25.1066 39.0613C17.877 36.6531 13 29.8881 13 22.2679V15.5348C13 14.9793 13.3666 14.4905 13.8998 14.3348L25.1552 11.0501ZM15.5 16.4721V22.2679C15.5 28.6721 19.5111 34.3728 25.5016 36.5518C31.4903 34.3728 35.5 28.6735 35.5 22.2711V16.4719L25.5052 13.5522L15.5 16.4721ZM25.4686 18.4686C26.1589 18.4686 26.7186 19.0282 26.7186 19.7186V23.4686H30.4686C31.1589 23.4686 31.7186 24.0282 31.7186 24.7186C31.7186 25.4089 31.1589 25.9686 30.4686 25.9686H26.7186V29.7186C26.7186 30.4089 26.1589 30.9686 25.4686 30.9686C24.7782 30.9686 24.2186 30.4089 24.2186 29.7186V25.9686H20.4686C19.7782 25.9686 19.2186 25.4089 19.2186 24.7186C19.2186 24.0282 19.7782 23.4686 20.4686 23.4686H24.2186V19.7186C24.2186 19.0282 24.7782 18.4686 25.4686 18.4686Z" 
				fill={color ? color : colors.primary} />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 22.2679V16.4721L25.5052 13.5522L35.5 16.4719V22.2711C35.5 28.6735 31.4903 34.3728 25.5016 36.5518C19.5111 34.3728 15.5 28.6721 15.5 22.2679ZM25.4686 18.4686C26.1589 18.4686 26.7186 19.0282 26.7186 19.7186V23.4686H30.4686C31.1589 23.4686 31.7186 24.0282 31.7186 24.7186C31.7186 25.4089 31.1589 25.9686 30.4686 25.9686H26.7186V29.7186C26.7186 30.4089 26.1589 30.9686 25.4686 30.9686C24.7782 30.9686 24.2186 30.4089 24.2186 29.7186V25.9686H20.4686C19.7782 25.9686 19.2186 25.4089 19.2186 24.7186C19.2186 24.0282 19.7782 23.4686 20.4686 23.4686H24.2186V19.7186C24.2186 19.0282 24.7782 18.4686 25.4686 18.4686Z" 
				fill={color ? color : colors.primary} />
			<Path d="M27.1 19.35C27.1 18.6044 26.4956 18 25.75 18C25.0044 18 24.4 18.6044 24.4 19.35V23.4H20.35C19.6044 23.4 19 24.0044 19 24.75C19 25.4956 19.6044 26.1 20.35 26.1H24.4V30.15C24.4 30.8956 25.0044 31.5 25.75 31.5C26.4956 31.5 27.1 30.8956 27.1 30.15V26.1H31.15C31.8956 26.1 32.5 25.4956 32.5 24.75C32.5 24.0044 31.8956 23.4 31.15 23.4H27.1V19.35Z" 
				fill="#314163"/>
		</Svg>
	)
}

CreateLeagueIcon.propTypes = {
	color: PropTypes.string
}

export default CreateLeagueIcon

