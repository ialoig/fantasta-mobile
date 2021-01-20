

let USER = {
    email: '',
    id: ''
}

const Set = ( email, id ) =>
{
    USER = {
        email,
        id
    }
}

const Get = () =>
{
    return USER
}

export const User = {
    Set,
    Get
}