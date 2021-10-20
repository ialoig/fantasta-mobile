import TIPOLOGY from "../constants"

export const validateCreateLeaguePage = (leagueName, password, numParticipants) => {
    let ret = {
        isValid: true,
        errorMessage: ""
    }

    if (!leagueName) {
        ret.errorMessage = "missing_league_name"
        ret.isValid = false
    }
    else if (!password) {
        ret.errorMessage = "missing_password"
        ret.isValid = false
    }
    else if (numParticipants < 2) {
        ret.errorMessage = "participants_error"
        ret.isValid = false
    }
    return ret
}

export const validateTeamSettingsPage = (numGoalskeepersId, tipology, numDefenders, numMidfielders, numStrikers, numPlayers) => {
    let ret = {
        isValid: true,
        errorMessage: ""
    }

    if (numGoalskeepersId < 1) {
        ret.errorMessage = "goalskeepers_error"
        ret.isValid = false
    }
    else if (tipology == TIPOLOGY.CLASSIC && numDefenders < 3) {
        ret.errorMessage = "defenders_error"
        ret.isValid = false
    }
    else if (tipology == TIPOLOGY.CLASSIC && numMidfielders < 3) {
        ret.errorMessage = "midfielders_error"
        ret.isValid = false
    }
    else if (tipology == TIPOLOGY.CLASSIC && numStrikers < 1) {
        ret.errorMessage = "forwarders_error"
        ret.isValid = false
    }
    else if (tipology == TIPOLOGY.CLASSIC && numDefenders + numMidfielders + numStrikers < 10) {
        ret.errorMessage = "players_error"
        ret.isValid = false
    }
    else if (tipology == TIPOLOGY.MANTRA && numPlayers < 10) {
        ret.errorMessage = "players_error"
        ret.isValid = false
    }
    return ret

}

export const validateAuctionSettingsPage = (countdown) => {
    let ret = {
        isValid: true,
        errorMessage: ""
    }

    if (countdown < 3) {
        ret.errorMessage = "countdown_error"
        ret.isValid = false
    }		
    return ret
}

export const validateCreateTeamPage = (teamname) => {
    let ret = {
        isValid: true,
        errorMessage: ""
    }

    if (!teamname) {
        ret.errorMessage = "missing_team_name"
        ret.isValid = false
    }
    return ret

}

export const validateJoinLeaguePage = (leagueName, password) => {

    let ret = {
        isValid: true,
        errorMessage: ""
    }

    if (!leagueName) {
        ret.errorMessage = "missing_league_name"
        ret.isValid = false
    }
    else if (!password) {
        ret.errorMessage = "missing_password"
        ret.isValid = false
    }
    return ret
}