import React from "react"
import { io } from "socket.io-client"
import { CUSTOM_CONFIG } from "../../custom_config" // TODO: temporary solution for development
import { User } from "../services/user"

const EVENT_TYPE = {

	// FootballPlayer
	SERVER_FOOTBALL_PLAYER_LIST_UPDATE:0,
  
	// Events sent by the mobile app
	CLIENT: {
	  
	  LEAGUE: {
		USER_NEW: 0,
		USER_EXIT: 0,
		USER_ONLINE:0,
		USER_OFFLINE:0
	  },
  
	  MARKET: {
		OPEN: 0,
		USER_ONLINE: 0,
		START: 0,
		PLAYER_SELECTED: 0,
		BET: 0,
		WIN: 0,
		PAUSE: 0,
		CLOSE: 0,
		USER_OFFLINE: 0,
	  }
  
	},
	
	// Events sent by the server
	SERVER: {
  
	  LEAGUE: {
		USER_NEW: 0,
		USER_EXIT: 0,
		USER_ONLINE: 0,
		USER_OFFLINE: 0
	  },
  
	  MARKET: {
		OPEN: 0,
		USER_ONLINE: 0,
		START: 0,
		SEARCH: 0,
		PLAYER_SELECTED: 0,
		BET: 0,
		WIN: 0,
		PAUSE: 0,
		CLOSE: 0,
		USER_OFFLINE: 0,
	  }
	  
	},
  /*
	// League
	CLIENT_LEAGUE_JOIN: 0,
	SERVER_LEAGUE_JOIN: 0,
	CLIENT_LEAGUE_EXIT: 0,
	SERVER_LEAGUE_EXIT: 0,
	CLIENT_LEAGUE_LEFT: 0,
	SERVER_LEAGUE_LEFT: 0,
  
	// Market
	CLIENT_MARKET_OPEN: 0,
	SERVER_MARKET_OPEN: 0,
	CLIENT_MARKET_JOIN: 0,
	SERVER_MARKET_JOIN: 0,
	CLIENT_MARKET_START: 0,
	SERVER_MARKET_START: 0,
	SERVER_MARKET_SEARCH: 0,
	CLIENT_MARKET_PLAYER_SELECTED: 0,
	SERVER_MARKET_PLAYER_SELECTED: 0,
	CLIENT_MARKET_BET: 0,
	SERVER_MARKET_BET: 0,
	CLIENT_MARKET_WIN: 0,
	SERVER_MARKET_WIN: 0,
	CLIENT_MARKET_PAUSE: 0,
	SERVER_MARKET_PAUSE: 0,
	CLIENT_MARKET_CLOSE: 0,
	SERVER_MARKET_CLOSE: 0,
	CLIENT_MARKET_LEFT: 0,
	SERVER_MARKET_LEFT: 0,
	*/
  }

class Socket {

	constructor() {
		this.league = null
		this.player = null
		this.ioClient = io(`${CUSTOM_CONFIG.socket_url}`)
		this.SocketContext = React.createContext()
		console.log(`[Socket] initialization. league=${this.league} player=${this.player}`)
	}

	joinRoom(leagueName){
		this.league = leagueName
		this.player = User.get().username
		console.log(`[Socket] joinRoom league=${this.league} player=${this.player}`)
		this.ioClient.emit(EVENT_TYPE.CLIENT.LEAGUE.USER_ONLINE, { room: this.league, player: this.player }, (response) => {
			console.log(`response.status: ${response.status}`)
			console.log(`response.error: ${JSON.stringify(response.error, null, 2)}`)
		})
	}

	leagueEventHandler = (payload) => {
	
		const { event_type, data } = payload
	
		switch (event_type) {
		case EVENT_TYPE.SERVER.LEAGUE.USER_ONLINE:
			console.log(`[Socket] user joined room ${this.league}. players online: ${data}`)
			break
	
		case EVENT_TYPE.SERVER.LEAGUE.USER_OFFLINE:
			console.log(`[Socket] user left room ${this.league}. players online: ${data}`)
			break
	
		default:
			console.error(`[Socket] event ${event_type} is not supported`)
		}
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
	else{
		console.log("[Socket] getSocketInstance - USE EXISTING")
	}
	return socketInstance
}

export const SocketManager = {
	getSocketInstance
}