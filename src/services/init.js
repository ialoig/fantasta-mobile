
import { Fonts } from "./fonts"
import { Players } from "./players"
import { Server } from "./server"

export const Init = () =>
{
	return Promise.all([
		Fonts.Init(),
		Server.Init(),
		Players.Init()
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