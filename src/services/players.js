
import axios from "axios"

import { Storage } from "./storage"

let PLAYERS = {}
let VERSION = ""
let STATISTICS = {}

const setPlayers = ( players ) =>
{
	PLAYERS = players || []
}

const getPlayers = () =>
{
	return PLAYERS
}

const getPlayersByID = (searchID) =>
{
	return PLAYERS[searchID]
}

const setStatistics = ( statistics ) =>
{
	STATISTICS = statistics || []
}

const getStatistics = () =>
{
	return STATISTICS
}

const getStatisticsByPlayerID = (playerID) =>
{
	return STATISTICS[playerID]
}

const init = async () =>
{
	try
	{
		console.log("GET /footballPlayers")

		let players = await Storage.get( "players" )
		players = typeof(players) == "string" ? JSON.parse(players) : players

		let version = players && players.version || 0

		let response = await axios.get("/footballPlayers", { params: { version } })

		if ( response && response.updated )
		{
			PLAYERS = response.list
			STATISTICS = response.statistics
			VERSION = response.version

			console.log("footballPlayers (typeof)", typeof(PLAYERS))
			Storage.set( "players", JSON.stringify({ 
				list: response.list, 
				statistics: response.statistics, 
				version: response.version 
			}) )
		}
		else
		{
			PLAYERS = players.list
			STATISTICS = players.statistics
			VERSION = version
		}

		return Promise.resolve()
	}
	catch (error)
	{
		console.log("[players init] - error: ", error)
		return Promise.reject(error)
	}
}

export const Players = {
	setPlayers,
	getPlayers,
	getPlayersByID,
	setStatistics,
	getStatistics,
	getStatisticsByPlayerID,
	init
}