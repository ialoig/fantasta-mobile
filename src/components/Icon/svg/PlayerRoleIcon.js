import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"
import AttRoleIcon from "../svg/roles/AttRoleIcon"
import CenRoleIcon from "../svg/roles/CenRoleIcon"
import DifRoleIcon from "../svg/roles/DifRoleIcon"
import PorRoleIcon from "../svg/roles/PorRoleIcon"
import EmptyIcon from "./EmptyIcon"


const RoleIcon = {
	P: PorRoleIcon,
	Por: PorRoleIcon,
	D: DifRoleIcon,
	Dd: DifRoleIcon,
	Ds: DifRoleIcon,
	Dc: DifRoleIcon,
	C: CenRoleIcon,
	M: CenRoleIcon,
	E: CenRoleIcon,
	W: CenRoleIcon,
	T: CenRoleIcon,
	A: AttRoleIcon,
	Pc: AttRoleIcon,
}


function PlayerRoleIcon({ role, ...props }) {

	const RoleIconComponent = RoleIcon[role] || EmptyIcon

	return (
		<View style={style.icon}>
			<RoleIconComponent {...props} />
		</View>
	)
}

PlayerRoleIcon.propTypes = {
	role: PropTypes.oneOf([...Object.keys(RoleIcon)]).isRequired
}

PlayerRoleIcon.defaultProps = {
	
}

export default PlayerRoleIcon

export const style = StyleSheet.create({
	icon: {
		padding: 8
	},
})

