
import { Fonts } from "./fonts"
import { Players } from "./players"
import { Server } from "./server"

export const Init = () =>
{
	return Promise.all([
		Fonts.init(),
		Server.init(),
		Players.init()
	])
		.then(
			() =>
			{
				return Promise.resolve()
			},
			(err) =>
			{
				console.log("[init] - error: " +err)
				return Promise.reject(err)
			}
		)
}