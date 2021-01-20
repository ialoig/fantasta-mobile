
let LEAGUES = []

const Set = ( leagues ) =>
{
    LEAGUES = leagues || []
}

const Get = () =>
{
    return LEAGUES
}

export const Leagues = {
    Set,
    Get
}