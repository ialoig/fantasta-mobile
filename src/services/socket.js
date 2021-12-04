import React from "react"
import { io } from "socket.io-client"
import { CUSTOM_CONFIG } from "../../custom_config" // TODO: temporary solution for development
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
			USER_OFFLINE: 104
		},
		MARKET: {
			OPEN: 105,
			USER_ONLINE: 106,
			START: 107,
			FOOTBALL_PLAYER_SELECTED: 108,
			BET: 109,
			WIN: 110,
			PAUSE: 111,
			CLOSE: 112,
			USER_OFFLINE: 113,
		}
	},

	// Events sent by the server (2XX)
	SERVER: {
		LEAGUE: {
			USER_NEW: 201,
			USER_DELETED: 202,
			USER_ONLINE: 203,
			USER_OFFLINE: 204
		},
		MARKET: {
			OPEN: 205,
			USER_ONLINE: 206,
			START: 207,
			FOOTBALL_PLAYER_SELECTED: 208,
			BET: 209,
			WIN: 210,
			PAUSE: 211,
			CLOSE: 212,
			USER_OFFLINE: 213,
			SEARCH: 214
		}
	}
}

/**
 * This class is instantiated only once and sharead among all pages in the mobile app via the React.Context.
 */
class Socket {

	constructor() {
		this.league_room = null
		this.market_room = null
		this.player = null
		this.ioClient = io(`${CUSTOM_CONFIG.socket_url}`)
		this.SocketContext = React.createContext()
		console.log("[Socket] initialization")
	}

	joinRoom(leagueName) {
		this.league_room = `league=${leagueName}`
		this.player = User.get().username
		console.log(`[Socket] joinRoom ${this.league_room} player=${this.player}`)
		this.ioClient.emit(EVENT_TYPE.CLIENT.LEAGUE.USER_ONLINE, { room: this.league_room, user: this.player }, (response) => {
			if(response.error){
				console.error(`[Socket] joinRoom Error: ${response.error}`)
				// TODO: handle error
			}
			console.log(`response.status: ${response.status}`)
			console.log(`response.error: ${JSON.stringify(response.error, null, 2)}`)
		})
	}
}

// singleton Socket instance in the mobile app
let socketInstance = null

const getSocketInstance = () => {
	if (!socketInstance) {
		// only the first call to getSocketInstance will create a Socket instance
		console.log("[Socket] getSocketInstance - CREATE New")
		socketInstance = new Socket()
	}
	else {
		console.log("[Socket] getSocketInstance - USE EXISTING")
	}
	return socketInstance
}

export const SocketManager = {
	EVENT_TYPE,
	getSocketInstance
}
