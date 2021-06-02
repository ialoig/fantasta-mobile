
import axios from "axios"

import { Storage } from "./storage"

let PLAYERS = {}
let VERSION = ""

const Set = ( players ) =>
{
	PLAYERS = players || []
}

const Get = () =>
{
	return PLAYERS
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
			PLAYERS = response.footballPlayers
			VERSION = response.version

			console.log("footballPlayers (typeof)", typeof(PLAYERS))
			Storage.Set( "players", JSON.stringify({ footballPlayers: response.footballPlayers, version: response.version }) )
		}
		else
		{
			PLAYERS = players.footballPlayers
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
	Set,
	Get,
	Init
}