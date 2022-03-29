/**
 *  MARKET object definition:
 *  MARKET = {
 * 		"_id": "61efe018b73845071ce4e852",
 * 		"active": false,
 * 		"betHistory": Array [],
 * 		"closedAt": null,
 * 		"createdAt": "2022-01-25T11:33:44.985Z",
 * 		"league": "61efe018b73845071ce4e844",
 * 		"onlineTeams": Array [],
 * 		"open": false,
 * 		"teamTurn": null,
 * 		"updatedAt": "2022-01-25T11:33:44.985Z",
 * 	}
*/


let MARKET
let ONLINE_PLAYERS = []

const init = ( market ) => {
	console.log("[services-market] [init] market: ", market)
	MARKET = market
}

const get = () => {
	return MARKET
}

const setOpen = () => {
	MARKET.open = true
}

const setOnlinePlayers = (onlinePlayers) => {
	console.log("[services-market] [setOnlinePlayers] - onlinePlayers: ", onlinePlayers)
	ONLINE_PLAYERS = onlinePlayers //TODO: add user only if does not exists already
}

const getOnlinePlayers = () => {
	return ONLINE_PLAYERS
}

export const MarketStatus = {
	init,
	get,
	setOpen,
	setOnlinePlayers,
	getOnlinePlayers
}