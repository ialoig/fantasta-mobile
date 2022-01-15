
const init = ( league, team ) =>
{
	console.log(league)
	console.log(team)

	//TODO: preparare socket per eventi
}

let ONLINE_PLAYERS = []

const setOnlinePlayers = (onlinePlayers) => {
	ONLINE_PLAYERS = onlinePlayers
}

const getOnlinePlayers = () => {
	return ONLINE_PLAYERS
}

export const MarketStatus = {
	init,
	setOnlinePlayers,
	getOnlinePlayers
}