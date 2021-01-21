
import { Fonts } from './fonts'
import { Server } from './server'


const Init = () =>
{
    return Promise.all([
        Fonts.Init(),
        Server.Init()
    ])
    .then(
        () =>
        {
            return Promise.resolve()
        },
        (err) =>
        {
            return Promise.reject(err)
        }
    )
}

export default Init