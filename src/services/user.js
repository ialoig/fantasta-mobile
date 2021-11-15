

let USER = {
	email: "",
	id: "",
	username: ""
}

const set = ( user ) =>
{
	USER = {
		email: user.email,
		id: user._id,
		username: user.username
	}
}

const remove = () => {
	USER = {}
}


const get = () =>
{
	return USER
}

export const User = {
	set,
	get,
	remove
}