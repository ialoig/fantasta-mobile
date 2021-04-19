
import axios from "axios"
import { Alert } from "react-native"
import { Error } from "./error"
import { Leagues } from "./leagues"
import { Token } from "./server"
import { User } from "./user"

const Register = async (email, password) => {
	console.log("POST /auth/update - email=" + email + ", password=" + password)
	try {
		let response = await axios.post("/auth/register", { email, password }, {})
		saveUser(response)

		return Promise.resolve()
	}
	catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}

const Login = async (email, password) => {
	console.log("PUT /auth/login - email=" + email + ", password=" + password)
	try {
		let response = await axios.put("/auth/login", { email, password }, {})
		saveUser(response)

		return Promise.resolve()
	}
	catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}

const forgot = async (email) => {
	console.log("PUT /auth/forgot - email=" + email)
	try {
		let response = await axios.put("/auth/forgot", { email }, {})
		return Promise.resolve()
	}
	catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}

const Authenticate = async () => {
	console.log("PUT /auth/token")
	try {
		let response = await axios.put("/auth/token", {}, {})
		saveUser(response)

		return Promise.resolve()
	}
	catch (error) {
		return Promise.reject()
	}
}

const update = async (email, username, password) => {
	console.log("POST /auth/update - email=" + email + ", username=" + username)
	try {

		let response = await axios.put("/auth/update", { email, username, password }, {})
		saveUser(response)

		return Promise.resolve()
	}
	catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}


const deleteAccount = async (password) => {
	console.log("DELETE /auth/deleteAccount")
	try {
		await axios.delete("/auth/deleteAccount", {
			headers: {},
			data: { password: password }
		})

		User.remove()
		Token.remove()

		return Promise.resolve()
	}
	catch (error) {
		return Promise.reject(error)
	}
}

const saveUser = (response) => {
	console.log(`[saveUser] - ${JSON.stringify(response, null, 2)}`)

	let data = response || {}

	let token = data.token || ""
	Token.Set(token)

	let user = data.user || {}

	User.Set(user)

	let leagues = user.leagues || []
	Leagues.Set(leagues)
}


export const Auth = {
	Authenticate,
	Login,
	forgot,
	Register,
	update,
	deleteAccount
}