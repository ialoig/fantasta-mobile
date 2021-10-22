import axios from "axios"

import { Auction } from "./auction"
import { Error } from "./error"

let LEAGUES = []
let ACTIVE_LEAGUE = []

const SetLeagues = ( leagues ) => {
	LEAGUES = leagues || []
}

const GetLeagues = () => {
	return LEAGUES
}

const SetActiveLeague = ( league ) => {
	ACTIVE_LEAGUE = league || []
}

const GetActiveLeague = () => {
	return ACTIVE_LEAGUE
}

const GetMyTeam = (username) => {
	const teams = ACTIVE_LEAGUE.teams
	return teams.find(item => item.user.name === username)
}

const GetTeamByID = (id) => {
	const teams = ACTIVE_LEAGUE.teams
	return teams.find(item => item._id === id)
}

const Create = async ( settings ) =>
{
	console.log(`settings: ${JSON.stringify(settings, null, 2)}`)
	try
	{
		let response = await axios.post("/league/create", settings, {})

		console.log(`response: ${response}`)
		console.log(`response: ${JSON.stringify(response, null, 2)}`)
        
		LEAGUES = response.user.leagues || []
		Auction.Init( response.league, response.team )

		return Promise.resolve()
	}
	catch (error)
	{
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}

const Join = async ( id="", name="", password="", teamname="" ) =>
{
	console.log(`Join function called with wrong parameters: id=${id}, name=${name}, password=${password}, teamname=${teamname}`)
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
			ACTIVE_LEAGUE = response.league || []
			Auction.Init( response.league, response.team )
			return Promise.resolve()
		}
		catch (error)
		{
			Error.handleError(error, true)
			return Promise.reject(error)
		}
	}
	else{
		let error = `Join function called with wrong parameters: id=${id}, name=${name}, password=${password}, teamname=${teamname}`
		Error.handleError(error, true)
		return Promise.reject(error)
	}
}

export const Leagues = {
	SetLeagues,
	GetLeagues,
	SetActiveLeague,
	GetActiveLeague,
	GetMyTeam,
	GetTeamByID,
	Create,
	Join
}
