import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function TeamIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.54541" width="120" height="120" rx="40" 
				fill={secondary} />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M41.5023 39.1667H78.997C80.9257 39.1667 82.5001 40.8463 82.5001 42.8393V86.3251C82.5001 88.3246 80.9015 90 78.997 90H41.5015C39.6002 90 38 88.3459 38 86.3251V42.8393C38.0027 41.866 38.3725 40.9333 39.0286 40.2452C39.6847 39.5571 40.5738 39.1693 41.5015 39.1667" 
				fill={primary} />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M41.5025 86.9987C41.3338 86.9928 41.1736 86.9199 41.0544 86.7946C40.9352 86.6694 40.8658 86.5013 40.8604 86.3243V42.8385C40.8604 42.4743 41.1553 42.1674 41.5017 42.1674H78.9972C79.3326 42.1674 79.6431 42.4866 79.6431 42.8385V86.3243C79.6431 86.664 79.3217 86.9987 78.9972 86.9987H41.5017" 
				fill={primary} />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M60.2511 32.2672C59.8174 32.2672 59.4014 32.4479 59.0947 32.7697C58.7881 33.0914 58.6158 33.5277 58.6158 33.9827C58.6158 34.4377 58.7881 34.8741 59.0947 35.1958C59.4014 35.5175 59.8174 35.6982 60.2511 35.6982C60.6848 35.6982 61.1007 35.5175 61.4074 35.1958C61.7141 34.8741 61.8864 34.4377 61.8864 33.9827C61.8864 33.5277 61.7141 33.0914 61.4074 32.7697C61.1007 32.4479 60.6848 32.2672 60.2511 32.2672ZM60.2503 30H60.2511C62.8257 30 64.9291 32.2082 64.9291 34.9092V39.6777C64.9291 43.5057 55.573 43.3363 55.573 39.6777V34.9092C55.573 32.2082 57.6803 30.0008 60.2503 30.0008" 
				fill={primary} />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M48.5665 37.2535H71.9318C72.3921 37.2535 72.7682 37.6521 72.7682 38.1293V43.7114C72.7682 44.1943 72.3929 44.5863 71.9318 44.5863H48.5665C48.1062 44.5863 47.7317 44.1934 47.7317 43.7105V38.1293C47.7317 37.6521 48.1062 37.2535 48.5665 37.2535Z" 
				fill={primary} />
			<Path d="M46.5943 52.068C46.5971 51.4802 46.8335 50.9175 47.2519 50.5025C47.6704 50.0875 48.2369 49.854 48.8278 49.853C49.4184 49.8543 49.9846 50.0879 50.4026 50.5029C50.8207 50.9179 51.0568 51.4805 51.0593 52.068C51.0598 52.6572 50.8252 53.2226 50.407 53.6398C49.9887 54.0571 49.4211 54.2922 48.8287 54.2935C48.2358 54.293 47.6673 54.0583 47.2483 53.6409C46.8293 53.2236 46.594 52.6578 46.5943 52.068ZM44.6748 52.068C44.6748 54.3534 46.5397 56.2028 48.8278 56.2028C49.929 56.2013 50.9847 55.7649 51.7627 54.9896C52.5407 54.2143 52.9774 53.1634 52.9769 52.068C52.9769 49.8016 51.1129 47.9485 48.8278 47.9485C46.5397 47.9485 44.6748 49.8006 44.6748 52.068ZM64.2601 75.2424C64.2596 74.6531 64.4938 74.0875 64.9115 73.6696C65.3292 73.2516 65.8964 73.0152 66.4888 73.0122C67.0826 73.0137 67.6516 73.2495 68.0709 73.6678C68.4901 74.0861 68.7254 74.6527 68.7252 75.2434C68.7211 75.8309 68.4838 76.393 68.0649 76.8072C67.646 77.2213 67.0795 77.454 66.4888 77.4545C65.8993 77.4528 65.3343 77.2194 64.9169 76.8053C64.4995 76.3912 64.2634 75.8298 64.2601 75.2434V75.2424ZM62.3416 75.2424C62.3431 76.3351 62.7809 77.3826 63.5586 78.1544C64.3363 78.9262 65.3903 79.3591 66.4888 79.3581C68.7807 79.3581 70.6437 77.5155 70.6437 75.2434C70.6434 74.1471 70.2057 73.0957 69.4267 72.3203C68.6476 71.5448 67.591 71.1087 66.4888 71.1077C65.3877 71.1097 64.3325 71.5464 63.5548 72.3218C62.7772 73.0973 62.3409 74.1481 62.3416 75.2434V75.2424ZM61.4685 51.6919L62.2325 52.7489L58.2825 55.5371C64.5397 56.5465 67.7468 60.7203 67.7468 68.0442H65.8321C65.8321 61.5783 63.2281 58.1768 57.7559 57.3836L61.0913 61.3927L60.0784 62.2144L55.085 56.2075L61.4685 51.6919ZM48.6822 68.5337L50.1479 67.3167L52.2321 69.8135L55.1836 67.4976L56.3678 69.0051L53.4517 71.2753L55.8049 74.0902L54.3296 75.2977L51.9516 72.4485L49.3246 74.5006L48.1423 73.0055L50.7176 70.9867L48.6822 68.5337ZM73.7866 59.7452L71.4048 56.896L68.7807 58.9482L67.6013 57.4407L70.1832 55.4191L68.1374 52.9803L69.6174 51.7556L71.6882 54.2477L74.6397 51.949L75.8249 53.4412L72.9202 55.7171L75.2581 58.5272L73.7866 59.7452Z" 
				fill={secondary} />
		</Svg>

	)
}

TeamIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

TeamIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default TeamIcon

