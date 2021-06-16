import I18n from "i18n-js"

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
	NONE: "zero",
	LIST: "listPrice"
}

export const FIELDS_ID = {
	username: "username",
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

export const ROLE_CLASSIC = {
	"ALL": "ALL",
	"P": I18n.translate("por_short"),
	"D": I18n.translate("dif_short"),
	"C": I18n.translate("cen_short"),
	"A": I18n.translate("att_short")
}

export const ROLE_MANTRA = {
	"Por": "Por",
	"Dd": "Dd",
	"Ds": "Ds",
	"Dc": "Dc",
	"E": "E",
	"M": "M",
	"C": "C",
	"W": "W",
	"T": "T",
	"A": "A",
	"Pc": "Pc"
}

export const ROLES = {
	...ROLE_CLASSIC,
	...ROLE_MANTRA
}

export const ROLE_CLASSIC_DISPLAY_SHORT = {
	ALL: "ALL",
	P: I18n.translate("por_short"),
	D: I18n.translate("dif_short"),
	C: I18n.translate("cen_short"),
	A: I18n.translate("att_short")
}

export const ROLE_CLASSIC_DISPLAY_LONG = {
	ALL: "ALL",
	P: I18n.translate("por"),
	D: I18n.translate("dif"),
	C: I18n.translate("cen"),
	A: I18n.translate("att")
}


export const ROLE_MANTRA_DISPLAY_SHORT = {
	"Por": "Por",
	"Dd": "Dd",
	"Ds": "Ds",
	"Dc": "Dc",
	"E": "E",
	"M": "M",
	"C": "C",
	"W": "W",
	"T": "T",
	"A": "A",
	"Pc": "Pc"
}