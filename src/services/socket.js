import React from "react"
import { io } from "socket.io-client"
import { CUSTOM_CONFIG } from "../../custom_config" // TODO: temporary solution for development
import { Leagues } from "../services/leagues"
import { User } from "../services/user"

const EVENT_TYPE = {

	// FootballPlayer
	SERVER_FOOTBALL_PLAYER_LIST_UPDATE: 100,

	// Events sent by the mobile app (1XX)
	CLIENT: {
		LEAGUE: {
			USER_NEW: 101,
			USER_DELETED: 102,
			USER_ONLINE: 103,
			USER_OFFLINE: 104,
			MARKET_OPEN: 105
		},
		MARKET: {
			USER_ONLINE: 106,
			ACTIVE: 107,
			FOOTBALL_PLAYER_SELECTED: 108,
			BET: 109,
			WIN: 110,
			PAUSE: 111,
			CLOSE: 112,
			USER_OFFLINE: 113,
			FOOTBALL_PLAYER_SELECTED_RANDOM: 114
		}
	},

	// Events sent by the server (2XX)
	SERVER: {
		LEAGUE: {
			USER_NEW: 201,
			USER_DELETED: 202,
			USER_ONLINE: 203,
			USER_OFFLINE: 204,
			MARKET_OPEN: 205
		},
		MARKET: {
			USER_ONLINE: 206,
			ACTIVE: 207,
			FOOTBALL_PLAYER_SELECTED: 208,
			BET: 209,
			WIN: 210,
			PAUSE: 211,
			CLOSE: 212,
			USER_OFFLINE: 213,
			SEARCH: 214,
			FOOTBALL_PLAYER_SELECTED_RANDOM: 215
		}
	}
}

/**
 * This class is instantiated only once and sharead among all pages in the mobile app via the React.Context.
 */
class Socket {

	constructor() {
		this.league_prefix = "league="
		this.market_prefix = "market="
		this.league_room = null
		this.market_room = null
		this.ioClient = io.connect(`${CUSTOM_CONFIG.socket_url}`) //TODO: changed to io.connect, was io.(`${CUSTOM_CONFIG.socket_url}
		this.SocketContext = React.createContext()
		console.log("[Socket] initialization")
	}

	joinRoom(league_id, newUser) {
		this.league_room = `${this.league_prefix}${league_id}`
		this.market_room = `${this.market_prefix}${league_id}`

		const user_id = User.get().id
		const team_id = Leagues.getMyTeam(User.get().username)._id

		console.log(`[Socket] [joinRoom] league_room=${this.league_room} user_id=${user_id} team_id=${team_id} league_id=${league_id} newUser=${newUser}`)
		const payload = { user_id: user_id, team_id: team_id, league_id: league_id }

		if (newUser) {
			console.log("[Socket] [joinRoom] emitting event EVENT_TYPE.CLIENT.LEAGUE.USER_NEW")
			this.ioClient.emit(EVENT_TYPE.CLIENT.LEAGUE.USER_NEW, payload, (response) => {
				if (response.error) {
					console.error(`[Socket] [joinRoom] Error: ${response.error}`)
					// TODO: handle error
					// de-register leagueEvents
				}
				console.log(`[Socket] [joinRoom] response status: ${response.status}`)
				console.log(`[Socket] [joinRoom] error? ${JSON.stringify(response.error, null, 2)}`)
			})
		}
		else {
			console.log("[Socket] [joinRoom] emitting event EVENT_TYPE.CLIENT.LEAGUE.USER_ONLINE")
			this.ioClient.emit(EVENT_TYPE.CLIENT.LEAGUE.USER_ONLINE, payload, (response) => {
				if (response.error) {
					console.error(`[Socket] [joinRoom] Error: ${response.error}`)
					// TODO: handle error
					// de-register leagueEvents
				}
				console.log(`[Socket] [joinRoom] response status: ${response.status}`)
				console.log(`[Socket] [joinRoom] error? ${JSON.stringify(response.error, null, 2)}`)
			})
		}
	}
}

// singleton Socket instance in the mobile app
let socketInstance = null

const getSocketInstance = () => {
	if (!socketInstance) {
		// only the first call to getSocketInstance will create a Socket instance
		socketInstance = new Socket()
	}
	return socketInstance
}

const destroySocketInstance = () => {
	console.log("[Socket] destroySocketInstance")
	socketInstance = null
}

export const SocketManager = {
	EVENT_TYPE,
	getSocketInstance,
	destroySocketInstance
}
