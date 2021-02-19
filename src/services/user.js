

let USER = {
    email: '',
    id: '',
    name: ''
}

const Set = ( email, id, name ) =>
{
    USER = {
        email,
        id,
        name
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