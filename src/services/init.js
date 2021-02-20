
import { Fonts } from './fonts'
import { Server } from './server'
import { Players } from './players'

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