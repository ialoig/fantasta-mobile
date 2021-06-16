
import axios from "axios"

import { Storage } from "./storage"

let PLAYERS = {}
let VERSION = ""
let STATISTICS = {}

const SetPlayers = ( players ) =>
{
	PLAYERS = players || []
}

const GetPlayers = () =>
{
	return PLAYERS
}

const GetPlayersByID = (searchID) =>
{
	return PLAYERS[searchID]
}

const SetStatistics = ( statistics ) =>
{
	STATISTICS = statistics || []
}

const GetStatistics = () =>
{
	return STATISTICS
}

const GetStatisticsByPlayerID = (playerID) =>
{
	return STATISTICS[playerID]
}

const Init = async () =>
{
	try
	{
		console.log("GET /footballPlayers")

		let players = await Storage.Get( "players" )
		players = typeof(players) == "string" ? JSON.parse(players) : players

		let version = players && players.version || 0

		let response = await axios.get("/footballPlayers", { params: { version } })

		if ( response && response.updated )
		{
			PLAYERS = response.list
			STATISTICS = response.statistics
			VERSION = response.version

			console.log("footballPlayers (typeof)", typeof(PLAYERS))
			Storage.Set( "players", JSON.stringify({ 
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
	SetPlayers,
	GetPlayers,
	GetPlayersByID,
	SetStatistics,
	GetStatistics,
	GetStatisticsByPlayerID,
	Init
}