
import axios from "axios"
import { Error } from "./error"

const feedBack = async ( text ) =>
{
	console.log("POST /support - Feedback, ", text )
	
    send( text, 'Feedback' )
}

const contact = async ( text ) => {
	console.log("POST /support - Contact Us, ", text )
	
    send( text, 'Contact Us' )
}

const send = ( text, subject ) =>
{
    try {
		let response = await axios.post("/support", { text, subject }, {})

        return Promise.resolve()
	}
	catch (error) {
		Error.handleError(error, true)
		return Promise.reject()
	}
}


export const Support = {
    contact,
	feedBack
}