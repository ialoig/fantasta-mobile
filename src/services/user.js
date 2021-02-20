

let USER = {
    email: '',
    id: '',
    username: ''
}

const Set = ( user ) =>
{
    USER = {
        email: user.email,
        id: user._id,
        username: user.username
    }
}

const remove = () => {
    USER = {}
}


const Get = () =>
{
    return USER
}

export const User = {
    Set,
    Get,
    remove
}