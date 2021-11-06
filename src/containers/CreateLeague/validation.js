import { TIPOLOGY } from "../../constants"

function errorEmptyValue(value){
	return !value
}

function errorNumPartitipants(numParticipants){
	return numParticipants < 2
}

function errorNumGoalskeepers(numGoalskeepers){
	return numGoalskeepers < 1
}

function errorNumDefenders(tipology, numDefenders){
	return tipology == TIPOLOGY.CLASSIC && numDefenders < 3
}

function errorNumMidfielders(tipology, numMidfielders){
	return tipology == TIPOLOGY.CLASSIC && numMidfielders < 3
}

function errorNumStrikers(tipology, numStrikers){
	return tipology == TIPOLOGY.CLASSIC && numStrikers < 1
}

function errorPlayers(numPlayers){
	return numPlayers < 10
}

function errorCountdown(countdown){
	return countdown < 3
}

export function validateLeagueSettingsPage(numParticipants){
	let error_message = ""
	if(errorNumPartitipants(numParticipants)){
		error_message = "participants_error"
	}
	return error_message
}

export const validateTeamSettingsPage = (numGoalskeepers, numDefenders, numMidfielders, numStrikers, tipology, numPlayers) => {
	let error_message = ""
	if(errorNumGoalskeepers(numGoalskeepers)){
		error_message = "goalskeepers_error"
	}
	else if (errorNumDefenders(tipology, numDefenders)) {
		error_message = "defenders_error"
	}
	else if (errorNumMidfielders(tipology, numMidfielders)){
		error_message = "midfielders_error"
	}
	else if (errorNumStrikers(tipology, numStrikers)) {
		error_message = "forwarders_error"
	}
	else if (tipology == TIPOLOGY.CLASSIC && errorPlayers(numDefenders + numMidfielders + numStrikers)) {
		error_message = "players_error"
	}
	else if (tipology == TIPOLOGY.MANTRA && errorPlayers(numPlayers)) {
		error_message = "players_error"
	}
	return error_message
}

export const validateAuctionSettingsPage = (countdown) => {
	let error_message = ""
	if (errorCountdown(countdown)) {
		error_message = "countdown_error"
	}		
	return error_message
}

export const validateCreateLeaguePage = (leagueName, password, teamname) => {
	let error_message = ""
	if(errorEmptyValue(leagueName)){
		error_message = "missing_league_name"
	}
	else if(errorEmptyValue(password)){
		error_message = "missing_password"
	}
	else if(errorEmptyValue(teamname)) {
		error_message = "missing_team_name"
	}
	return error_message
}

export const validateJoinLeaguePage = (leagueName, password, teamname) => {
	let error_message = ""
	if(errorEmptyValue(leagueName)){
		error_message = "missing_league_name"
	}
	else if(errorEmptyValue(password)){
		error_message = "missing_password"
	}
	else if(errorEmptyValue(teamname)){
		error_message = "missing_team_name"
	}
	return error_message
}