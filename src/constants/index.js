
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
    MANTRA: 'mantra',
    CLASSIC: 'classic'
}

export const AUCTION_TYPE = {
    RANDOM: 'random',
    CALL: 'call',
    ALPHABETIC: 'alphabetic'
}

export const STARTING_PRICE = {
    NONE: 'none',
    LIST: 'list'
}

export const FIELDS_ID = {
    emailId: 'email',
    passwordId: 'password',
    repeatPasswordId: 'repeatPassword',
    leagueNameId: 'leagueName',
    partecipantsId: 'partecipants',
    tipologyId: 'tipology',
    goalskeepersId: 'goalskeepers',
    defendersId: 'defenders',
    midfieldersId: 'midfielders',
    forwardersId: 'forwarders',
    playersId: 'players',
    budgetId: 'budget',
    countdownId: 'countdown',
    auctiontypeId: 'auctiontype',
    startpriceId: 'startprice',
    teamnameId: 'teamname'
}