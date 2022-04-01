import axios from "axios"
import { Error } from "./error"

const feedBack = ( text ) => {
	console.log("POST /support - Feedback, ", text )
	return send( text, "Feedback" )
}

const contact = ( text ) => {
	console.log("POST /support - Contact Us, ", text )
	return send( text, "Contact Us" )
}

const send = async ( text, subject ) => {
	if ( !text ) {
		return Promise.reject()
	}
	try {
		await axios.post("/support", { text, subject }, {})

		return Promise.resolve()
	} catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}


export const Support = {
	contact,
	feedBack
}