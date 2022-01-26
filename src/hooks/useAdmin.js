import { useEffect, useState } from "react"
import { Leagues, User } from "../services"


export default function useAdmin () {
	const user = User.get()
	const admin = Leagues.getAdmin()

	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		checkAdmin()
	}, [user, admin])

	const checkAdmin = () => {
		const isadmin = user.id === admin._id
		console.log("[useAdmin] user: %s, admin: %s --> is admin? %s", user.username, admin.name, isadmin)
		setIsAdmin(isadmin)
	}

	return isAdmin
	
}
