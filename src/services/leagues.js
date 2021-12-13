import axios from "axios"

import { SocketManager } from "../services/socket"
import { Auction } from "./auction"
import { Error } from "./error"

let LEAGUES = []
let ACTIVE_LEAGUE = []


/**
 * After adding the league to the database, also add it to local storage if not exist already
 * @param {*} response from either create or join function
 */
const addLeague = (response) => {
	const league = response.user.leagues.find(item => item._id === response.league._id)
	var index = LEAGUES.findIndex(existing_league => existing_league._id === league._id) 
	if (index === -1){
		LEAGUES.push(league)
	}
}

const setLeagues = ( leagues ) => {
	LEAGUES = leagues || []
}

const getLeagues = () => {
	return LEAGUES
}

const setActiveLeague = ( league ) => {
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

const create = async ( settings ) =>
{
	try
	{
		let response = await axios.post("/league/create", settings, {})
		addLeague(response)
		setActiveLeague(response.league)
		Auction.init( response.league, response.team )
		return Promise.resolve()
	}
	catch (error)
	{
		console.log("[create] - error: ", error)
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}

const join = async ( id="", name="", password="", teamname="" ) =>
{
	if ( id || name && password && teamname )
	{
		try
		{
			let data = {
				id,
				name,
				password,
				teamname
			}

			let response = await axios.put("/league/join", data, {})
			addLeague(response)
			setActiveLeague(response.league)
			Auction.init(response.league, response.team)
			
			// join Socket room
			SocketManager.getSocketInstance().joinRoom(response.league.name)

			return Promise.resolve()
		}
		catch (error)
		{
			Error.handleError(error, true)
			return Promise.reject(error)
		}
	}
	else{
		let error = `join function called with wrong parameters: id=${id}, name=${name}, password=${password}, teamname=${teamname}`
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

export const Leagues = {
	setLeagues,
	getLeagues,
	setActiveLeague,
	getActiveLeague,
	getMyTeam,
	getTeamByID,
	create,
	join,
	getParticipants,
	getTeams
}
