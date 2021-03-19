export const PASSWORD_OPT = {
	minLength: 6,
	minLowercase: 0,
	minUppercase: 0,
	minNumbers: 0,
	minSymbols: 0,
	returnScore: false,
	pointsPerUnique: 1,
	pointsPerRepeat: 0.5,
	pointsForContainingLower: 10,
	pointsForContainingUpper: 10,
	pointsForContainingNumber: 10,
	pointsForContainingSymbol: 10
}

export const TIPOLOGY = {
	MANTRA: "mantra",
	CLASSIC: "classic"
}

export const AUCTION_TYPE = {
	RANDOM: "random",
	CALL: "call",
	ALPHABETIC: "alphabetic"
}

export const STARTING_PRICE = {
    NONE: 'zero',
    LIST: 'listPrice'
}

export const FIELDS_ID = {
	emailId: "email",
	passwordId: "password",
	repeatPasswordId: "repeatPassword",
	leagueNameId: "name",
	participantsId: "participants",
	tipologyId: "type",
	goalskeepersId: "goalkeepers",
	defendersId: "defenders",
	midfieldersId: "midfielders",
	strikersId: "strikers",
	playersId: "players",
	budgetId: "budget",
	countdownId: "countdown",
	auctiontypeId: "auctionType",
	startpriceId: "startPrice",
	teamnameId: "teamname"
}