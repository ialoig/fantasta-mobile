import axios from "axios"

import { Auction } from "./auction"
import { Error } from "./error"

let LEAGUES = []
let ACTIVE_LEAGUE = []


/**
 * After adding the league to the database, also add it to local storage if not exist already
 * @param {*} response from either Create or Join function
 */
const AddLeague = (response) => {
	const league = response.user.leagues.find(item => item._id === response.league._id)
	var index = LEAGUES.findIndex(existing_league => existing_league._id === league._id) 
	if (index === -1){
		LEAGUES.push(league)
	}
}

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
	try
	{
		let response = await axios.post("/league/create", settings, {})
		AddLeague(response)
		SetActiveLeague(response.league)
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
			AddLeague(response)
			SetActiveLeague(response.league)
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
