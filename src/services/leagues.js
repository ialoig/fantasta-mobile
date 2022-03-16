import axios from "axios"

import { Error } from "./error"
import { MarketStatus } from "./market"

let LEAGUES = []
let ACTIVE_LEAGUE = []


/**
 * After adding the league to the database, also add it to local storage if not exist already
 * @param {*} response from either create or join function
 */
const addLeague = (response) => {
	const league = response.user.leagues.find(item => item._id === response.league._id)
	if (LEAGUES.length > 0) {
		var index = LEAGUES.findIndex(existing_league => existing_league._id === league._id)
		// case 0 : league does not exist
		if (index === -1) {
			LEAGUES.push(league)
		}
		// case 1: league exists, and should be updated
		else {
			LEAGUES[index] = league
		}
	} else {
		LEAGUES.push(league)
	}
}

const setLeagues = (leagues) => {
	LEAGUES = leagues || []
}

const getLeagues = () => {
	return LEAGUES
}

const setActiveLeague = (league) => {
	ACTIVE_LEAGUE = league || []
}

const getActiveLeague = () => {
	return ACTIVE_LEAGUE
}

const getMyTeam = (username) => {
	const teams = ACTIVE_LEAGUE.teams
	return teams.find(item => item.user.name === username)
}

const getTeamByID = (id) => {
	const teams = ACTIVE_LEAGUE.teams
	return teams.find(item => item._id === id)
}

const getAdmin = () => {
	return ACTIVE_LEAGUE ? ACTIVE_LEAGUE.admin : null
}


/**
 * API: /league/create
 * @param {*} settings 
 * @returns 
 */
const create = async (settings) => {
	try {
		let response = await axios.post("/league/create", settings, {})
		console.log("[services - /league/create] response: ", response)
		if (!response) {
			return Promise.reject("Error - Empty response from /league/create api")
		}
		initLocalStorage(response)

		return Promise.resolve()
	}
	catch (error) {
		console.log("[create] - error: ", error)
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}


/**
 * API: /league/join
 * @param {String} id 
 * @param {String} name 
 * @param {String} password 
 * @param {String} teamname 
 * @returns 
 */
const join = async (id = "", name = "", password = "", teamname = "") => {
	if (id || name && password && teamname) {
		try {
			let data = {
				id,
				name,
				password,
				teamname
			}

			let response = await axios.put("/league/join", data, {})
			if (!response) {
				return Promise.reject("Error - Empty response from /league/join api")
			}
			initLocalStorage(response)

			return Promise.resolve(response.league._id)
		}
		catch (error) {
			Error.handleError(error, true)
			return Promise.reject(error)
		}
	}
	else {
		let error = `join function called with wrong parameters: id=${id}, name=${name}, password=${password}, teamname=${teamname}`
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}


/**
 * Returns, if exists, the corresponding League object of the leagueId passed by parameter.
 * Returned League will be added to the local storage. If already existing on local storage it will be overwrited.
 * @param {String} id The League id
 * @returns League object from db
 */
const get = async (id) => {
	try {
		if (id) {
			let response = await axios.get("/league/get", { params: { leagueID: id } })
			console.log("[services - /league/get] response: ", response)
			if (!response) {
				return Promise.reject("Error - Empty response from /league/get api")
			}
			initLocalStorage(response)

			return Promise.resolve(response.league._id)
		}
	}
	catch (error) {
		console.log("[get] - error: ", error)
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}


/**
 * 
 * @returns {array} list of users name whom have joined the active league
 */
const getParticipants = () => {
	const teams = ACTIVE_LEAGUE.teams
	let participants = teams.map(team => {
		return team.user.name
	})
	return participants
}

/**
 * 
 * @returns {array} list of teams name whom have joined the active league
 */
const getTeams = () => {
	const teams = ACTIVE_LEAGUE.teams
	return teams
}


const initLocalStorage = (response) => {
	// add league to LEAGUE array
	addLeague(response)
	setActiveLeague(response.league)

	// initialize market
	MarketStatus.init(response.market)

}

export const Leagues = {
	setLeagues,
	getLeagues,
	setActiveLeague,
	getActiveLeague,
	getMyTeam,
	getTeamByID,
	create,
	join,
	get,
	getParticipants,
	getTeams,
	getAdmin
}
