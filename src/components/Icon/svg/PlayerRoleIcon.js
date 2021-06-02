import PropTypes from "prop-types"
import React from "react"
import AttRoleIcon from "../svg/roles/AttRoleIcon"
import CenRoleIcon from "../svg/roles/CenRoleIcon"
import DifRoleIcon from "../svg/roles/DifRoleIcon"
import PorRoleIcon from "../svg/roles/PorRoleIcon"
import EmptyIcon from "./EmptyIcon"


const RoleIcon = {
	P: PorRoleIcon,
	D: DifRoleIcon,
	C: CenRoleIcon,
	A: AttRoleIcon
}


function PlayerRoleIcon({ role, ...props }) {

	const RoleIconComponent = RoleIcon[role] || EmptyIcon

	return (
		<RoleIconComponent {...props} />
	)
}

PlayerRoleIcon.propTypes = {
	role: PropTypes.string
}

PlayerRoleIcon.defaultProps = {
	
}

export default PlayerRoleIcon

