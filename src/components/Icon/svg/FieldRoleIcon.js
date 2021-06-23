import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect, Text } from "react-native-svg"
import colors from "../../../styles/colors"


const roleCoordinates = {
	P: ["72", "114"],
	D: ["72", "80"],
	C: ["72", "45"],
	A: ["90", "5"],
	Por: ["72", "114"],
	Dd: ["130", "80"],
	Ds: ["15", "80"],
	Dc: ["72", "90"],
	E: ["130", "40"],
	M: ["72", "65"],
	W: ["20", "20"],
	T: ["72", "20"],
	Pc: ["72", "5"]
}

const roleTextCoordinates = {
	P: ["81", "137"],
	D: ["81", "103"],
	C: ["82", "65"],
	A: ["100", "25"],
	Por: ["79", "137"],
	Dd: ["135", "100"],
	Ds: ["20", "100"],
	Dc: ["79", "110"],
	E: ["141", "61"],
	M: ["80", "87"],
	W: ["28", "41"],
	T: ["82", "40"],
	Pc: ["79", "25"]
}


function FieldRoleIcon({ primary, secondary, width, height, roles, ...props }) {
	return (
		
		<Svg width={width} height={height} {...props}
			viewBox="0 0 174 152" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M141.404 98.4828V149.707C141.404 149.983 141.628 150.207 141.904 150.207H166.131C166.407 150.207 166.631 149.983 166.631 149.707C166.631 148.674 166.811 146.961 167.842 145.465L167.847 145.457C168.675 144.208 170.013 143.504 171.786 143.195C172.026 143.153 172.2 142.946 172.2 142.703V2.40091C172.2 2.12477 171.977 1.90091 171.7 1.90091H112.944C112.671 1.90091 112.449 2.11963 112.444 2.39241C112.169 18.5683 100.725 31.4268 86.9536 31.4268C73.1819 31.4268 61.7382 18.5683 61.4632 2.39241C61.4586 2.11963 61.2361 1.90091 60.9633 1.90091H2.20671C1.93057 1.90091 1.70671 2.12477 1.70671 2.40091V142.595C1.70671 142.838 1.88149 143.046 2.12093 143.087C3.89375 143.396 5.23222 144.101 6.05965 145.35L6.06481 145.357C7.09592 146.853 7.27606 148.567 7.27606 149.599C7.27606 149.875 7.49991 150.099 7.77606 150.099H32.0027C32.2788 150.099 32.5027 149.875 32.5027 149.599V98.4828H65.7901C65.9624 98.4828 66.1226 98.394 66.214 98.2479C71.0557 90.5061 78.7959 85.875 86.9536 85.875C95.2062 85.875 102.852 90.4001 107.692 98.2453C107.783 98.3929 107.944 98.4828 108.117 98.4828H141.404ZM59.1069 150.207C59.383 150.207 59.6069 149.983 59.6069 149.707V130.164H114.115V149.707C114.115 149.983 114.339 150.207 114.615 150.207H140.605C140.881 150.207 141.105 149.983 141.105 149.707V99.3836C141.105 99.1075 140.881 98.8836 140.605 98.8836H108.86H64.8619H33.1166C32.8404 98.8836 32.6166 99.1075 32.6166 99.3836V149.707C32.6166 149.983 32.8404 150.207 33.1166 150.207H59.1069ZM66.859 97.7057C66.7569 97.8592 66.7474 98.0564 66.8345 98.2188C66.9215 98.3813 67.0909 98.4828 67.2752 98.4828H106.632C106.815 98.4828 106.984 98.3822 107.072 98.2208C107.159 98.0595 107.151 97.8632 107.051 97.7095C102.328 90.4723 94.8454 86.1681 86.9536 86.1681C79.0591 86.1681 71.6722 90.4746 66.859 97.7057ZM59.8135 149.707C59.8135 149.983 60.0374 150.207 60.3135 150.207H113.501C113.777 150.207 114.001 149.983 114.001 149.707V131.065C114.001 130.789 113.777 130.565 113.501 130.565H60.3135C60.0374 130.565 59.8135 130.789 59.8135 131.065V149.707ZM85.8447 2.22775C85.7721 2.03135 85.585 1.90091 85.3756 1.90091H62.17C62.0358 1.90091 61.9073 1.95483 61.8133 2.05055C61.7193 2.14626 61.6677 2.27574 61.6701 2.40989C61.9522 18.1291 73.1561 31.0259 86.9536 31.0259C100.75 31.0259 111.955 18.2382 112.237 2.40982C112.24 2.27569 112.188 2.14623 112.094 2.05052C112 1.95482 111.871 1.90091 111.737 1.90091H88.5316C88.3015 1.90091 88.1011 2.05797 88.0461 2.28142C87.9106 2.83186 87.4465 3.19401 86.9536 3.19401C86.4961 3.19401 86.0809 2.86772 85.8447 2.22775ZM166.838 149.707C166.838 149.983 167.062 150.207 167.338 150.207H171.7C171.977 150.207 172.2 149.983 172.2 149.707V144.103C172.2 143.958 172.137 143.82 172.028 143.725C171.918 143.63 171.772 143.588 171.629 143.609C170.028 143.841 168.781 144.55 167.947 145.759L167.939 145.772C167.032 147.176 166.838 148.792 166.838 149.707ZM2.27851 143.609C2.13488 143.588 1.98928 143.63 1.87953 143.725C1.76978 143.82 1.70671 143.958 1.70671 144.103V149.707C1.70671 149.983 1.93057 150.207 2.20671 150.207H6.56935C6.84549 150.207 7.06935 149.983 7.06935 149.707C7.06935 148.821 6.97809 147.181 5.95752 145.756C5.12408 144.549 3.87763 143.841 2.27851 143.609Z" 
				fill={secondary} stroke="#D0DBEA" stroke-miterlimit="10" stroke-linejoin="round"/>
			{
				roles.map( (role) => {
					return (
						<>
							<Rect x={roleCoordinates[role][0]-2.5} y={roleCoordinates[role][1]-2.5}
								width="35" height="35" rx="17.5" 
								fill="#2E907D"/>
							<Rect x={roleCoordinates[role][0]} y={roleCoordinates[role][1]}
								width="30" height="30" rx="15" 
								fill={primary} />
							<Text x={roleTextCoordinates[role][0]} y={roleTextCoordinates[role][1]}
								fill={secondary} 
								fontSize="16" fontWeight="bold" fontFamily="PoppinsSemiBold" >
								{role}
							</Text>
						</>
					)
				})
			}
		</Svg>
	)
}

FieldRoleIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	roles: PropTypes.array,
	width: PropTypes.number,
	height: PropTypes.number
}

FieldRoleIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 174,
	height: 152
}

export default FieldRoleIcon

