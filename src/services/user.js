

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

const setEmail = (email) => {
    USER = {
        email: email
    }
}

const setUsername = (username) => {
    USER = {
        name: username
    }
}

const Get = () =>
{
    return USER
}

export const User = {
    Set,
    setEmail,
    setUsername,
    Get
}